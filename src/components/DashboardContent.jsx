import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PlexusAnimation = () => (
  <div className="h-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
    <div className="w-32 h-32 bg-white rounded-full animate-pulse"></div>
  </div>
);

const UserProfile = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">User Profile</h2>
    <p>Profile information goes here...</p>
  </div>
);

const SocialGraph = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Social Graph</h2>
    <p>Interactive social graph goes here...</p>
  </div>
);

const NetworkGrowthChart = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
    { name: 'Jul', value: 900 },
    { name: 'Aug', value: 1000 },
    { name: 'Sep', value: 800 },
    { name: 'Oct', value: 1500 },
    { name: 'Nov', value: 2000 },
    { name: 'Dec', value: 2400 },
  ];

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Network Growth</h2>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const NetworkDistributionMap = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Network Distribution</h2>
    <p>Static map of users in the network goes here...</p>
  </div>
);

const DashboardContent = ({ activeSection }) => {
  switch (activeSection) {
    case 'profile':
      return <UserProfile />;
    case 'socialGraph':
      return <SocialGraph />;
    case 'networkGrowth':
      return <NetworkGrowthChart />;
    case 'networkDistribution':
      return <NetworkDistributionMap />;
    default:
      return <PlexusAnimation />;
  }
};

export default DashboardContent;
