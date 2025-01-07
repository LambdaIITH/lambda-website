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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-violet-200 dark:bg-violet-900"></div>
      {events.map((event, index) => (
        <div
          key={index}
          className={`mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className="w-5/12 relative">
            <div
              className={`bg-white/90 dark:bg-gray-800/90 p-4 rounded shadow backdrop-blur-sm border border-violet-100 dark:border-violet-900 ${
                index % 2 === 0 ? "mr-4" : "ml-4"
              }`}
            >
              <h3 className="font-bold text-lg mb-1 text-violet-700 dark:text-violet-300">{event.title}</h3>
              <p className="text-sm text-violet-600 dark:text-violet-400 mb-2">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
            </div>
            <div className="absolute top-5 w-4 h-4 rounded-full bg-violet-500 shadow">
              <div className="w-2 h-2 rounded-full bg-violet-300 absolute top-1 left-1"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
