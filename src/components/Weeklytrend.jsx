import React from 'react';

const Weeklytrend = () => {
  return (
    <div className="bg-white shadow rounded-xl p-3 mt-4 max-w-[250px]">
      <h2 className="text-gray-600 text-xs">Weekly Trend</h2>
      <h1 className="text-xl font-bold text-orange-600 mt-1">10.5k</h1>
      <p className="text-xs text-gray-500 mb-3">avg/day</p>

      <div className="h-20 w-full flex items-end gap-1">
        <div className="bg-orange-200 w-3 h-6 rounded"></div>
        <div className="bg-orange-300 w-3 h-10 rounded"></div>
        <div className="bg-orange-400 w-3 h-14 rounded"></div>
        <div className="bg-orange-300 w-3 h-8 rounded"></div>
        <div className="bg-orange-200 w-3 h-5 rounded"></div>
        <div className="bg-orange-400 w-3 h-16 rounded"></div>
        <div className="bg-orange-300 w-3 h-12 rounded"></div>
      </div>
    </div>
  );
};

export default Weeklytrend;
