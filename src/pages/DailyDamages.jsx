import { useState } from "react";
import { useDamage } from "../context/DamageContext";
import * as XLSX from "xlsx";

export default function DailyDamages() {
  const { damages, addDamage } = useDamage();

  const [form, setForm] = useState({
    KA04: 0,
    KA51: 0,
    KA52: 0,
    KA01: 0,
  });

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const save = () => {
    const total = Object.values(form).reduce((a, b) => a + b, 0);
    addDamage({
      date: new Date().toISOString().split("T")[0],
      ...form,
      total,
    });
  };

  const filteredData = damages.filter((d) => {
    if (!fromDate || !toDate) return true;
    return d.date >= fromDate && d.date <= toDate;
  });

  const downloadExcel = () => {
    if (filteredData.length === 0) {
      alert("No data available for selected dates");
      return;
    }
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Daily Damages");
    XLSX.writeFile(wb, "Daily_Damages_Report.xlsx");
  };

  return (
    <div className="min-h-screen bg-eggBg px-4 py-6 md:px-8 flex flex-col">
      {/* Damage Entry */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Enter Daily Damages</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {Object.keys(form).map((k) => (
            <input
              key={k}
              type="number"
              placeholder={k}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onChange={(e) =>
                setForm({ ...form, [k]: Number(e.target.value) })
              }
            />
          ))}
        </div>

        <button
          onClick={save}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium"
        >
          Save
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white p-6 rounded-xl shadow overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-orange-100 text-sm">
              <th className="p-3 text-left w-40">Date</th>
              <th className="p-3 text-center">KA04</th>
              <th className="p-3 text-center">KA51</th>
              <th className="p-3 text-center">KA52</th>
              <th className="p-3 text-center">KA01</th>
              <th className="p-3 text-center font-semibold">Total</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((d, i) => (
              <tr
                key={i}
                className="border-t text-sm hover:bg-gray-50 transition"
              >
                <td className="p-3 text-left">{d.date}</td>
                <td className="p-3 text-center">{d.KA04}</td>
                <td className="p-3 text-center">{d.KA51}</td>
                <td className="p-3 text-center">{d.KA52}</td>
                <td className="p-3 text-center">{d.KA01}</td>
                <td className="p-3 text-center font-bold text-orange-600">
                  {d.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Report */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Download Report</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              From Date
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              To Date
            </label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            onClick={downloadExcel}
            className="h-[42px] bg-green-600 hover:bg-green-700 text-white px-6 rounded-lg font-medium"
          >
            Download Excel
          </button>
        </div>
      </div>
    </div>
  );
}
