import React from 'react';

const Attendence: React.FC = () => {
  const daysInMonth = 30;
  const attendedDays = [1, 2, 3, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 19, 20, 22, 23, 24, 26, 27];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Attendence</h1>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">October 2025</h2>
          <div className="text-right">
            <p className="text-gray-400 text-sm">Attendance Rate</p>
            <p className="text-[#d4ff00] text-2xl font-bold">{Math.round((attendedDays.length / daysInMonth) * 100)}%</p>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-3">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg text-sm font-semibold ${
                attendedDays.includes(day)
                  ? 'bg-[#d4ff00] text-black'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Total Days</p>
          <p className="text-3xl font-bold text-white">{attendedDays.length}</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Current Streak</p>
          <p className="text-3xl font-bold text-[#d4ff00]">5 days</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-2">Longest Streak</p>
          <p className="text-3xl font-bold text-white">12 days</p>
        </div>
      </div>
    </div>
  );
};

export default Attendence;
