import React from 'react';

const Coach: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">My Coach</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="w-full h-64 bg-gray-700 rounded-lg mb-4"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Coach Sarah Johnson</h3>
          <p className="text-gray-400 mb-4">Professional Trainer - 15 years experience</p>
          <button className="w-full bg-[#d4ff00] text-black py-3 rounded-lg font-semibold hover:bg-[#c4ef00] transition-colors">
            Schedule Session
          </button>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Training Plan</h3>
            <div className="space-y-3">
              {['Monday - Strength Training', 'Wednesday - Cardio & Endurance', 'Friday - Skill Development', 'Saturday - Team Practice'].map((plan, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <span className="text-white">{plan}</span>
                  <span className="text-[#d4ff00] text-sm">View Details</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Feedback</h3>
            <p className="text-gray-400">Great progress on your endurance training! Keep up the consistency and focus on your form during the next session.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
