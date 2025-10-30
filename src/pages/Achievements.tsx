import React from 'react';

const Achievements: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'First Victory', description: 'Win your first challenge', unlocked: true },
          { title: 'Speed Demon', description: 'Complete 10 speed challenges', unlocked: true },
          { title: 'Consistency King', description: 'Train for 30 days straight', unlocked: true },
          { title: 'Team Player', description: 'Complete 5 team challenges', unlocked: false },
          { title: 'Master Athlete', description: 'Reach level 10', unlocked: false },
          { title: 'Champion', description: 'Win a tournament', unlocked: false },
        ].map((achievement, index) => (
          <div
            key={index}
            className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 ${
              !achievement.unlocked ? 'opacity-50' : ''
            }`}
          >
            <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-3xl ${
              achievement.unlocked ? 'bg-[#d4ff00] text-black' : 'bg-gray-700 text-gray-500'
            }`}>
              🏆
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{achievement.description}</p>
            <div className={`text-center py-2 rounded-lg ${
              achievement.unlocked ? 'bg-[#d4ff00] text-black font-semibold' : 'bg-gray-700 text-gray-400'
            }`}>
              {achievement.unlocked ? 'Unlocked' : 'Locked'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
