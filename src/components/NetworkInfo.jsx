import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Users, BarChart2, Globe } from 'lucide-react';

const NetworkInfo = ({ handleBoxClick }) => {
  return (
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
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NetworkInfo;
