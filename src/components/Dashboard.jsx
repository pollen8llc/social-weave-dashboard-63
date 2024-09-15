import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import NetworkFeed from './NetworkFeed';
import DashboardContent from './DashboardContent';
import NetworkInfo from './NetworkInfo';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('default');
  const [showUserList, setShowUserList] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleBoxClick = (section) => {
    setActiveSection(section);
    setShowUserList(section === 'connections');
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 flex flex-col lg:flex-row min-h-[500px]">
        <div className="w-full lg:w-2/3 p-4">
          <Card className="h-full">
            <DashboardContent activeSection={activeSection} selectedUser={selectedUser} />
          </Card>
        </div>
        <div className="w-full lg:w-1/3 p-4">
          <NetworkInfo handleBoxClick={handleBoxClick} />
        </div>
      </div>
      <div className="w-full p-4">
        <Card className="min-h-[300px] overflow-y-auto">
          <NetworkFeed 
            activeSection={activeSection} 
            showUserList={showUserList} 
            onUserClick={handleUserClick}
            selectedUser={selectedUser}
          />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
