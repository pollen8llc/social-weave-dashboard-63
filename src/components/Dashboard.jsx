import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MapPin, Users, BarChart2, Globe } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('default');

  const handleBoxClick = (section) => {
    setActiveSection(section);
  };

  const renderSection1Content = () => {
    switch (activeSection) {
      case 'profile':
        return <UserProfile />;
      case 'socialGraph':
        return <SocialGraph />;
      case 'networkGrowth':
        return <NetworkGrowthChart />;
      case 'networkDistribution':
        return <NetworkDistributionMap />;
      case 'location':
        return <UserLocation />;
      default:
        return <PlexusAnimation />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex">
        <div className="w-2/3 p-4">
          <Card className="h-full">
            {renderSection1Content()}
          </Card>
        </div>
        <div className="w-1/3 p-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Network Information</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('profile')}>
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback>JF</AvatarFallback>
                      </Avatar>
                      <span>Joseph Franco</span>
                    </div>
                  </Card>
                  <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('socialGraph')}>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Network Density</span>
                    </div>
                  </Card>
                  <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('networkGrowth')}>
                    <div className="flex items-center space-x-2">
                      <BarChart2 className="h-5 w-5" />
                      <span>Network Density Score</span>
                    </div>
                  </Card>
                  <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('networkDistribution')}>
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5" />
                      <span>Network Distribution</span>
                    </div>
                  </Card>
                  <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('location')}>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>My Location</span>
                    </div>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="h-1/3 p-4">
        <Card className="h-full overflow-y-auto">
          <NetworkFeed activeSection={activeSection} />
        </Card>
      </div>
    </div>
  );
};

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

const UserLocation = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">My Location</h2>
    <p>User's location information goes here...</p>
  </div>
);

const NetworkFeed = ({ activeSection }) => {
  const feedItems = [
    { id: 1, user: 'Tim Burkley', content: 'This is a status update. I'm on the internet today!' },
    { id: 2, user: 'Amber James', content: 'This is a status update. I'm on the internet today!' },
    { id: 3, user: 'Amber James', content: 'What should I wear?', poll: ['Denim', 'Leather', 'Nothing'] },
    { id: 4, user: 'Jonathan Gamble', content: 'New Video Link in my bio' },
    { id: 5, type: 'event', content: 'Tech networking on rooftop NYC', date: 'JUL/10 9:00PM' },
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Network Feed</h2>
      {feedItems.map((item) => (
        <Card key={item.id} className="p-4">
          {item.type === 'event' ? (
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">UPCOMING EVENT</p>
                <p>{item.content}</p>
              </div>
              <p className="text-right">{item.date}</p>
            </div>
          ) : (
            <>
              <p className="font-bold">{item.user}</p>
              <p>{item.content}</p>
              {item.poll && (
                <div className="mt-2">
                  {item.poll.map((option, index) => (
                    <div key={index} className="bg-gray-200 p-2 mt-1 rounded">{option}</div>
                  ))}
                </div>
              )}
            </>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;