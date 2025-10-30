import React from 'react';

const Challenges: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Speed Challenge', difficulty: 'Hard', reward: 150 },
          { title: 'Endurance Test', difficulty: 'Medium', reward: 100 },
          { title: 'Skill Mastery', difficulty: 'Expert', reward: 200 },
          { title: 'Team Challenge', difficulty: 'Easy', reward: 75 },
        ].map((challenge, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                challenge.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                'bg-red-500/20 text-red-400'
              }`}>
                {challenge.difficulty}
              </span>
            </div>
            <p className="text-gray-400 mb-4">Complete this challenge to earn rewards and improve your skills.</p>
            <div className="flex items-center justify-between">
              <span className="text-[#d4ff00] font-semibold">{challenge.reward} points</span>
              <button className="bg-[#d4ff00] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#c4ef00] transition-colors">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
