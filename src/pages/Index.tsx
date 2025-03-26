
import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Plane, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const currentDate = new Date();
  
  // Format date to MM/DD/YYYY
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  
  useEffect(() => {
    // Simulate loading effect
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className={cn("transition-opacity duration-700", isLoaded ? "opacity-100" : "opacity-0")}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-stem-blue mb-4 animate-fadeIn">
            STEM<span className="text-stem-blue opacity-80">scape</span> Flight Ticket
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
            Welcome to your flight ticket builder! This is the first step in your STEMscape challenge.
            Complete the missing parts of this ticket to continue your journey.
          </p>
          
          {/* Task Progress Indicators */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <span className="task-indicator task-todo">
              Add Your Name
            </span>
            <span className="task-indicator task-todo">
              Design Ticket
            </span>
            <span className="task-indicator task-todo">
              Set Destination
            </span>
          </div>
        </div>
        
        {/* Plane Ticket */}
        <div className="ticket animate-fadeIn animation-delay-300">
          <div className="ticket-header">
            <div className="flex items-center">
              <Plane className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">STEM Airlines</span>
            </div>
            <div className="text-right">
              <span className="text-sm opacity-80">Boarding Pass</span>
            </div>
          </div>
          
          <div className="ticket-body">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Passenger Name</p>
                <p className="text-lg font-medium">
                  {/* Intentionally left blank for students to fill */}
                  <span className="bg-yellow-100 px-1">[Add your name here]</span>
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">From</p>
                  <p className="font-medium">San Francisco (SFO)</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">To</p>
                  <div className="font-medium flex items-center">
                    <span className="bg-yellow-100 px-1">[Final Destination]</span>
                    <MapPin className="h-4 w-4 ml-1 text-red-500" />
                  </div>
                  <p className="text-xs text-red-500 italic mt-1">
                    Note: You'll write the final destination after gathering all coordinates
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Date</p>
                  <div className="font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-stem-blue" />
                    <span>{formattedDate}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Flight</p>
                  <p className="font-medium">STEM123</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Boarding Time</p>
                  <div className="font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-stem-blue" />
                    <span className="bg-yellow-100 px-1">[Add time]</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Seat</p>
                  <p className="font-medium bg-yellow-100 inline-block px-1">[Choose seat]</p>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500">Class</p>
                <p className="font-medium bg-yellow-100 inline-block px-1">[Economy/Business/First]</p>
              </div>
            </div>
          </div>
          
          <div className="ticket-footer">
            <div>
              <p className="text-xs text-gray-600">Gate</p>
              <p className="font-medium">S5</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600">Boarding Group</p>
              <p className="font-medium">A</p>
            </div>
          </div>
          
          {/* Barcode */}
          <div className="flex justify-center p-4 border-t border-dashed border-gray-300">
            <svg className="barcode" viewBox="0 0 100 30">
              <rect x="0" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="4" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="7" y="0" width="3" height="30" fill="#000"></rect>
              <rect x="12" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="16" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="19" y="0" width="4" height="30" fill="#000"></rect>
              <rect x="25" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="29" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="33" y="0" width="3" height="30" fill="#000"></rect>
              <rect x="38" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="41" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="45" y="0" width="3" height="30" fill="#000"></rect>
              <rect x="50" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="54" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="57" y="0" width="3" height="30" fill="#000"></rect>
              <rect x="62" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="66" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="69" y="0" width="4" height="30" fill="#000"></rect>
              <rect x="75" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="79" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="83" y="0" width="3" height="30" fill="#000"></rect>
              <rect x="88" y="0" width="1" height="30" fill="#000"></rect>
              <rect x="91" y="0" width="2" height="30" fill="#000"></rect>
              <rect x="95" y="0" width="3" height="30" fill="#000"></rect>
            </svg>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-10 bg-white rounded-lg shadow-md p-6 animate-fadeIn animation-delay-400">
          <h2 className="text-xl font-bold text-stem-blue mb-4">Task Instructions</h2>
          <div className="space-y-4">
            <div className="bg-stem-yellow bg-opacity-20 p-4 rounded-md">
              <h3 className="font-medium text-stem-blue mb-2">1. Complete Your Ticket</h3>
              <p className="text-gray-700">
                Fill in all the yellow highlighted areas of the ticket with your own information.
                Be creative with your choices!
              </p>
            </div>
            
            <div className="bg-stem-yellow bg-opacity-20 p-4 rounded-md">
              <h3 className="font-medium text-stem-blue mb-2">2. Customize The Design</h3>
              <p className="text-gray-700">
                Change the colors, add borders, or modify the layout to make the ticket your own.
                Use the HTML tips in the sidebar for help.
              </p>
            </div>
            
            <div className="bg-stem-yellow bg-opacity-20 p-4 rounded-md">
              <h3 className="font-medium text-stem-blue mb-2">3. Create A Celebrity Bio</h3>
              <p className="text-gray-700">
                Navigate to the Celebrity Bio page to create a biography for your chosen celebrity.
                Don't forget to add their photo!
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              className="bg-stem-blue hover:bg-stem-blue hover:opacity-90 text-white transition-all duration-200 transform hover:scale-105"
            >
              Check My Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
