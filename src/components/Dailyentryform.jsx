import React, { useState } from 'react';

const Dailyentryform = ({ addrow, blockeddates }) => {
  const [date, setDate] = useState("");
  const [aecs, setAecs] = useState("");
  const [bande, setBande] = useState("");
  const [hosa, setHosa] = useState("");
  const [singa, setSinga] = useState("");
  const [kudlu, setKudlu] = useState("");

  const handleSubmit = () => {
    if (!date) return alert("Date is required");
    if (blockeddates.includes(date)) return alert("Entry for this date already exists");
    if (!aecs || !bande || !hosa || !singa || !kudlu) return alert("All data is required");

    const total =
      Number(aecs) +
      Number(bande) +
      Number(hosa) +
      Number(singa) +
      Number(kudlu);

    addrow({
      date,
      aecs: Number(aecs),
      bande: Number(bande),
      hosa: Number(hosa),
      singa: Number(singa),
      kudlu: Number(kudlu),
      total,
    });

    setDate("");
    setAecs("");
    setBande("");
    setHosa("");
    setSinga("");
    setKudlu("");
  };

  return (
    <div className="bg-white shadow rounded-xl p-4 m-4">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-semibold">Daily Sales Entry</h1>
        <button className="px-3 py-1 text-xs border rounded-lg">New Entry</button>
      </div>

      <div>
        <label className="text-gray-600 text-xs">Select Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg w-full p-2 mt-1 text-sm"
        />
      </div>

      {date && (
        <p className={`text-xs mt-1 ${blockeddates.includes(date) ? "text-red-600" : "text-green-600"}`}>
          {blockeddates.includes(date) ? "Date already exists" : "Date available"}
        </p>
      )}

      {/* Outlets */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-sm">
        {[
          ["AECS Layout", aecs, setAecs],
          ["Bandepalya", bande, setBande],
          ["Hosa Road", hosa, setHosa],
          ["Singasandra", singa, setSinga],
          ["Kudlu Gate", kudlu, setKudlu],
        ].map(([label, val, setter]) => (
          <div key={label}>
            <label className="text-gray-600 text-xs">{label}</label>
            <input
              type="number"
              value={val}
              onChange={(e) => setter(e.target.value)}
              className="border p-2 rounded-lg w-full text-sm"
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold w-full md:w-auto"
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default Dailyentryform;
