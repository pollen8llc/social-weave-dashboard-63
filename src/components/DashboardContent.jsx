import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ForceGraph2D } from 'react-force-graph';

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

const SocialGraph = () => {
  const graphData = {
    nodes: [
      { id: 'User', group: 1 },
      { id: 'Connection 1', group: 2 },
      { id: 'Connection 2', group: 2 },
      { id: 'Connection 3', group: 2 },
      { id: 'Connection 4', group: 2 },
      { id: 'Connection 5', group: 2 },
    ],
    links: [
      { source: 'User', target: 'Connection 1' },
      { source: 'User', target: 'Connection 2' },
      { source: 'User', target: 'Connection 3' },
      { source: 'User', target: 'Connection 4' },
      { source: 'User', target: 'Connection 5' },
      { source: 'Connection 1', target: 'Connection 2' },
      { source: 'Connection 2', target: 'Connection 3' },
      { source: 'Connection 3', target: 'Connection 4' },
      { source: 'Connection 4', target: 'Connection 5' },
    ]
  };

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Social Graph</h2>
      <div style={{ height: '400px' }}>
        <ForceGraph2D
          graphData={graphData}
          nodeAutoColorBy="group"
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.color;
            ctx.fillText(label, node.x, node.y);
          }}
        />
      </div>
    </div>
  );
};

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
    case 'connections':
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
