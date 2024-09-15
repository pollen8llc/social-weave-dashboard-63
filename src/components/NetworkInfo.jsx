import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Globe } from 'lucide-react';

const NetworkInfo = ({ handleBoxClick }) => {
  const connections = 740; // This should be dynamically fetched or passed as a prop
  const networkDensity = (connections * 3.14).toFixed(2);

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Network Information</AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-2 gap-2">
            <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('profile')}>
              <div className="flex flex-col items-center space-y-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
                <span className="text-sm text-center">Joseph Franco</span>
              </div>
            </Card>
            <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('socialGraph')}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-bold">{networkDensity}</span>
                <span className="text-sm text-center">Network Density</span>
              </div>
            </Card>
            <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('connections')}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl font-bold">{connections}</span>
                <span className="text-sm text-center">Connections</span>
              </div>
            </Card>
            <Card className="p-2 cursor-pointer" onClick={() => handleBoxClick('networkDistribution')}>
              <div className="flex flex-col items-center space-y-2">
                <Globe className="h-8 w-8" />
                <span className="text-sm text-center">Network Distribution</span>
              </div>
            </Card>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NetworkInfo;
