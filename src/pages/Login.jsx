
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful");
      navigate('/');
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.code === 'auth/invalid-credential'
          ? 'Invalid email or password'
          : error.code === 'auth/invalid-email'
          ? 'Invalid email format'
          : error.code === 'auth/user-disabled'
          ? 'This account has been disabled'
          : error.code === 'auth/network-request-failed'
          ? 'Network error. Please check your connection.'
          : 'An error occurred during login. Please try again.'
      );
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  // For development purposes - allow skipping login
  const handleDevBypass = () => {
    toast.info("Bypassing login for development");
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="text-sm text-gray-500 text-center w-full">
            Until you set up Firebase with valid credentials, login will not work properly.
          </p>
          <Button 
            variant="outline" 
            type="button" 
            className="w-full" 
            onClick={handleDevBypass}
          >
            Development: Skip Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
