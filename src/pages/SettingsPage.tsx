import React from 'react';
import { useAuth } from '../context/AuthContext';

const SettingsPage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Settings</h1>
      <div className="space-y-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Account Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="text-white">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Account Status</p>
              <p className="text-[#d4ff00]">Active</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Notifications</h3>
          <div className="space-y-4">
            {['Email notifications', 'Push notifications', 'Training reminders', 'Achievement alerts'].map((setting, index) => (
              <label key={index} className="flex items-center justify-between cursor-pointer">
                <span className="text-white">{setting}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff00]"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Privacy</h3>
          <div className="space-y-4">
            {['Profile visibility', 'Show achievements', 'Display metrics'].map((setting, index) => (
              <label key={index} className="flex items-center justify-between cursor-pointer">
                <span className="text-white">{setting}</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4ff00]"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Actions</h3>
          <button
            onClick={() => signOut()}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
