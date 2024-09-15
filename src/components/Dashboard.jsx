import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import NetworkFeed from './NetworkFeed';
import DashboardContent from './DashboardContent';
import NetworkInfo from './NetworkInfo';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('default');

  const handleBoxClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 p-4">
          <Card className="h-full">
            <DashboardContent activeSection={activeSection} />
          </Card>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <NetworkInfo handleBoxClick={handleBoxClick} />
        </div>
      </div>
      <div className="w-full p-4">
        <Card className="h-64 overflow-y-auto">
          <NetworkFeed activeSection={activeSection} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
