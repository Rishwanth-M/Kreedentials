import React from 'react';

const Store: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-white mb-6">Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all">
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-white mb-2">Product {item}</h3>
            <p className="text-gray-400 mb-4">Premium training equipment for athletes</p>
            <button className="w-full bg-[#d4ff00] text-black py-3 rounded-lg font-semibold hover:bg-[#c4ef00] transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
