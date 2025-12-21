import { useEffect, useState } from "react";
import { useDamage } from "../context/DamageContext";

export default function AdminDashboard() {
  const { totalDamages } = useDamage();
  const [totalOutlets, setTotalOutlets] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("egg_outlets_v1");
    if (data) {
      setTotalOutlets(JSON.parse(data).length);
    }
  }, []);

  return (
    <div className="min-h-screen bg-eggBg px-4 py-6 md:px-8 flex flex-col">

      {/* Dashboard Overview Top Bar */}
      <div className="bg-white rounded-xl shadow px-6 py-4 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back! Here’s what’s happening today.
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
          U
        </div>
      </div>

      {/* About Egg Bucket */}
      <div className="w-full bg-yellow-200 rounded-xl mb-8 shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          About Egg Bucket
        </h2>
        <p className="text-gray-700">
          Egg Bucket helps manage egg distribution with transparency and
          real-time reporting.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard title="Total Eggs Distributed Today" value="12,540" icon="🥚" />

        {/* ✅ FIXED: dynamic outlet count */}
        <StatCard title="Total Outlets" value={totalOutlets} icon="🏪" />

        <StatCard
          title="Damages This Week"
          value={totalDamages}
          icon="📉"
        />

        <StatCard title="Today's NECC Rate" value="₹5.20" icon="📈" />

      </div>

      {/* Achievements */}
      <h2 className="text-xl font-bold mb-4">Achievements & Milestones</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MilestoneCard date="Q1 2024" title="Expanded to 5 New Regions" icon="➡️" />
        <MilestoneCard date="Oct 2023" title="1 Million Eggs Distributed Monthly" icon="🏆" />
        <MilestoneCard date="Aug 2023" title="Launched Digital Payment System" icon="💳" />
      </div>

      {/* Footer */}
      <div className="mt-12 p-4 bg-orange-100 rounded-xl flex flex-col sm:flex-row justify-between gap-2 text-sm">
        <div>
          <strong>Contact:</strong> eggbukect@144.com
        </div>
        <div>
          <strong>Address:</strong> Bandepalya, Bangalore, Karnataka
        </div>
      </div>

    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col">
      <p className="text-gray-600">{title}</p>
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-3xl font-bold text-orange-600">{value}</h3>
        <span className="text-3xl">{icon}</span>
      </div>
    </div>
  );
}

function MilestoneCard({ date, title, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <div>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
}
