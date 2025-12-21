import React from 'react';

const Dailyheader = () => {
  return (
    <div className="mb-4 pt-6 px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Daily Sales</h1>
        <p className="text-gray-600 text-sm">
          Manage and track daily egg sales across all outlets.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">

        <input
          type="date"
          className="border rounded-lg px-4 py-2 text-sm"
        />

        <button className="border px-4 py-2 rounded-lg text-sm">
          Last Week
        </button>

        <button className="border px-4 py-2 rounded-lg text-sm">
          Last Month
        </button>

        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold">
          Download
        </button>

      </div>
    </div>
  );
};

export default Dailyheader;
