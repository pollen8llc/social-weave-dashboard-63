import React from 'react';
import { Card } from "@/components/ui/card";

const NetworkFeed = ({ activeSection }) => {
  const feedItems = [
    { id: 1, user: "Tim Burkley", content: "This is a status update. I'm on the internet today!" },
    { id: 2, user: "Amber James", content: "This is a status update. I'm on the internet today!" },
    { id: 3, user: "Amber James", content: "What should I wear?", poll: ["Denim", "Leather", "Nothing"] },
    { id: 4, user: "Jonathan Gamble", content: "New Video Link in my bio" },
    { id: 5, type: "event", content: "Tech networking on rooftop NYC", date: "JUL/10 9:00PM" },
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Network Feed</h2>
      {feedItems.map((item) => (
        <Card key={item.id} className="p-4">
          {item.type === "event" ? (
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

export default NetworkFeed;