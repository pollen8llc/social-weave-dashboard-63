import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MapPin, Users, BarChart2, Globe } from 'lucide-react';
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
      <div className="flex-1 flex">
        <div className="w-2/3 p-4">
          <Card className="h-full">
            <DashboardContent activeSection={activeSection} />
          </Card>
        </div>
        <div className="w-1/3 p-4">
          <NetworkInfo handleBoxClick={handleBoxClick} />
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

export default Dashboard;
