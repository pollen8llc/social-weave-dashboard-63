
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For development purposes only - in a real app, use environment variables
// Use your own Firebase config or use a dummy config for demonstration
const firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "demo-project.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:a1b2c3d4e5f6a7b8c9d0e1"
};

// Initialize Firebase only if credentials are provided
let app, auth, db, storage;

// Conditional initialization to prevent errors
try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Firebase initialization error:", error.message);
  // Provide mock implementations for auth, db, and storage
  auth = {
    // Mock implementation for auth
    currentUser: null,
    onAuthStateChanged: (callback) => {
      callback(null);
      return () => {};
    },
    signInWithEmailAndPassword: () => Promise.reject(new Error("Firebase not configured")),
    signOut: () => Promise.resolve()
  };
  db = {
    // Mock implementation for Firestore
    collection: () => ({
      doc: () => ({
        get: () => Promise.resolve({ exists: false, data: () => null }),
        set: () => Promise.resolve()
      })
    })
  };
  storage = {
    // Mock implementation for storage
    ref: () => ({
      put: () => Promise.reject(new Error("Firebase not configured")),
      getDownloadURL: () => Promise.reject(new Error("Firebase not configured"))
    })
  };
}

export { app, auth, db, storage };
