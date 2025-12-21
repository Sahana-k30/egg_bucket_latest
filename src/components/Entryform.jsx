import React from 'react';
import { useState } from 'react';

const Entryform = ({ addRow, blockedDates }) => {
  const [date, setDate] = useState("");
  const [rate, setRate] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = () => {
    if (!date || !rate) {
      alert("Date and Rate are required");
      return;
    }

    if (blockedDates.includes(date)) {
      alert("Data for this date already exists!");
      return;
    }

    addRow({
      date,
      rate: `₹${rate} per egg`,
      remarks: remarks || "—",
    });

    setDate("");
    setRate("");
    setRemarks("");
  };

  return (
    <div className="mt-10 pb-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">NECC Rate Entry Form</h1>

      {/* ✅ UPDATED Form Container */}
      <div className="bg-white shadow rounded-xl p-6 ml-4 flex flex-wrap items-end gap-4 w-full">

        {/* Date */}
        <div className="w-full md:w-52">
          <p className="mb-2">Date</p>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border rounded-lg p-2 w-full"
          />
          {date && (
            <p
              className={`mt-1 text-sm ${
                blockedDates.includes(date) ? "text-red-600" : "text-green-600"
              }`}
            >
              {blockedDates.includes(date)
                ? "Date already exists"
                : "Date available"}
            </p>
          )}
        </div>

        {/* NECC Rate */}
        <div className="w-full md:w-52">
          <p className="mb-2">NECC Rate (₹)</p>
          <input
            type="number"
            placeholder="NECC Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
            className="border rounded-lg p-2 w-full"
          />
        </div>

        {/* Remarks */}
        <div className="w-full md:flex-1">
          <p className="mb-2">Remarks (optional)</p>
          <input
            type="text"
            placeholder="Remarks (optional)"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>

        {/* ✅ UPDATED Save Button */}
        <div className="w-full md:w-auto">
          <button
            onClick={handleSubmit}
            className="mt-2 bg-orange-600 h-10 text-white px-6 py-2 rounded-xl font-semibold cursor-pointer w-full md:w-auto"
          >
            Save Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Entryform;
