import React from "react";

interface Event {
  date: string;
  title: string;
  description: string;
}

interface EventTimelineProps {
  events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-900"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className="w-5/12 relative">
            <div
              className={`bg-white dark:bg-gray-800 p-4 rounded shadow ${index % 2 === 0 ? "mr-4" : "ml-4"}`}
            >
              <h3 className="font-bold text-lg mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </div>
            <div className="absolute top-5 w-4 h-4 rounded-full bg-blue-500 shadow">
              <div className="w-2 h-2 rounded-full bg-blue-300 absolute top-1 left-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
