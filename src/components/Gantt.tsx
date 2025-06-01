import React from 'react';

interface ClassSchedule {
    id: string;
    name: string;
    slug: string; // Add slug for linking to branch pages
    sessions: {
        day: string;
        timeSlot: 'morning' | 'afternoon';
        duration?: number; // How many consecutive slots it spans (default 1)
    }[];
    color: string;
}

interface GanttProps {
    classes: ClassSchedule[]; // Remove optional, make it required
}

const WEEK_DAYS = [
    { date: 'June 2', day: 'Monday' },
    { date: 'June 3', day: 'Tuesday' },
    { date: 'June 4', day: 'Wednesday' },
    { date: 'June 5', day: 'Thursday' },
    { date: 'June 6', day: 'Friday' }
];

const TIME_SLOTS = ['morning', 'afternoon'] as const;

// Create all time slots for the week horizontally
const ALL_TIME_SLOTS = WEEK_DAYS.flatMap(({ date, day }) => 
    TIME_SLOTS.map(timeSlot => ({
        date,
        day,
        timeSlot,
        key: `${date}-${timeSlot}`
    }))
);

export default function Gantt({ classes }: GanttProps) {
    const getClassSession = (className: string, day: string, timeSlot: 'morning' | 'afternoon') => {
        const classSchedule = classes.find(c => c.name === className);
        return classSchedule?.sessions.find(s => s.day === day && s.timeSlot === timeSlot);
    };

    return (
        <div className="w-full mx-auto p-4 flex flex-col items-center gap-4">
            {/* Gantt Chart - centered wrapper */}
            <div className="w-full flex justify-center">
                <div className="overflow-x-auto overscroll-x-contain">
                    {/* Fixed width for scrolling on smaller screens */}
                    <div className="min-w-[800px] w-max"> {/* 200px + (10 * 60px) = 800px */}
                        {/* Header Row - Days */}
                        <div 
                            className="grid gap-0 mb-1"
                            style={{ gridTemplateColumns: '200px repeat(10, 60px)' }}
                        >
                            <div className="border border-gray-200 bg-gray-50"></div>
                            {WEEK_DAYS.map(({ date, day }) => (
                                <div 
                                    key={date} 
                                    className="col-span-2 text-center border border-gray-200 bg-gray-100"
                                >
                                    <div className="p-2 font-semibold text-gray-800">
                                        <div className="text-sm">{day}</div>
                                        <div className="text-xs text-gray-600">{date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Sub-header Row - Time Slots */}
                        <div 
                            className="grid gap-0 mb-3 h-6"
                            style={{ gridTemplateColumns: '200px repeat(10, 60px)' }}
                        >
                            <div className="bg-gray-50 border border-gray-200 flex items-center justify-center font-medium text-gray-700 text-sm">
                                Classes
                            </div>
                            {ALL_TIME_SLOTS.map(({ date, day, timeSlot, key }) => (
                                <div 
                                    key={key} 
                                    className={`bg-gray-50 border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600 ${date === 'June 6' && timeSlot === 'afternoon' ? 'bg-gray-700 text-white' : ''}`}
                                >
                                    {timeSlot === 'morning' ? 'AM' : day === "Friday" ? 'Manifest' :'PM'}
                                </div>
                            ))}
                        </div>

                        {/* Class Rows */}
                        {classes.map(classItem => (
                            <div 
                                key={classItem.id} 
                                className="grid gap-0 mb-1"
                                style={{ gridTemplateColumns: '200px repeat(10, 60px)' }}
                            >
                                {/* Class Name */}
                                <div className="flex items-center bg-gray-100 p-2 border border-gray-200">
                                    <div className="text-sm font-medium text-gray-800 truncate">
                                        <a 
                                            href={`/branches/${classItem.slug}`}
                                            className="hover:text-blue-600 underline transition-colors duration-200"
                                            title={`View ${classItem.name} branch page`}
                                        >
                                            {classItem.name}
                                        </a>
                                    </div>
                                </div>

                                {/* Time Slots */}
                                {ALL_TIME_SLOTS.map(({ date, timeSlot, key }) => {
                                    const session = getClassSession(classItem.name, date, timeSlot);
                                    const hasSession = !!session;
                                    
                                    return (
                                        <div
                                            key={key}
                                            className={`
                                                h-12 border border-gray-200 flex items-center justify-center
                                                transition-all duration-200
                                                ${hasSession 
                                                    ? `${classItem.color} text-white font-medium shadow-sm` 
                                                    : `bg-gray-50 `
                                                } 
                                                ${date === 'June 6' && timeSlot === 'afternoon' ? 'bg-gray-700' : ''}
                                            `}
                                            title={hasSession ? `${classItem.name} - ${date} ${timeSlot}` : ''}
                                        >
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Time Legend */}
            <div className=" text-center text-sm text-gray-600">
                <p><strong>AM:</strong> 10:00-12:30 &nbsp;•&nbsp; <strong>PM:</strong> 2:30-6:00</p>
            </div>
        </div>
    );
}

// Export the type for use in other components
export type { ClassSchedule };
