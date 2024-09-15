import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const NetworkFeed = ({ activeSection, showUserList, onUserClick, selectedUser }) => {
  const feedItems = [
    { id: 1, user: "Tim Burkley", content: "This is a status update. I'm on the internet today!" },
    { id: 2, user: "Amber James", content: "This is a status update. I'm on the internet today!" },
    { id: 3, user: "Amber James", content: "What should I wear?", poll: ["Denim", "Leather", "Nothing"] },
    { id: 4, user: "Jonathan Gamble", content: "New Video Link in my bio" },
    { id: 5, type: "event", content: "Tech networking on rooftop NYC", date: "JUL/10 9:00PM" },
  ];

  const userList = [
    { id: 1, name: "Tim Burkley", avatar: "/placeholder.svg" },
    { id: 2, name: "Amber James", avatar: "/placeholder.svg" },
    { id: 3, name: "Jonathan Gamble", avatar: "/placeholder.svg" },
    { id: 4, name: "Sarah Smith", avatar: "/placeholder.svg" },
    { id: 5, name: "Michael Johnson", avatar: "/placeholder.svg" },
  ];

  if (showUserList) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Network Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map((user) => (
            <Card 
              key={user.id} 
              className={`p-4 flex items-center space-x-4 cursor-pointer ${selectedUser === user.id ? 'bg-blue-100' : ''}`}
              onClick={() => onUserClick(user.id)}
            >
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <span>{user.name}</span>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Network Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feedItems.map((item) => (
          <Card key={item.id} className="p-4">
            {item.type === "event" ? (
              <div className="flex flex-col">
                <p className="font-bold">UPCOMING EVENT</p>
                <p>{item.content}</p>
                <p className="mt-2">{item.date}</p>
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
    </div>
  );
};

export default NetworkFeed;
