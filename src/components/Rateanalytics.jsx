export default function Rateanalytics() {
  return (
    <div className="mt-6 max-w-[600px] mx-auto">
      <h1 className="font-semibold mb-3" style={{ fontSize: "11pt" }}>
        NECC Rate Analytics
      </h1>

      <div
        className="grid gap-2 ml-1"
        style={{ gridTemplateColumns: "1fr 0.4fr 0.3fr" }}
      >
        {/* Chart */}
        <div
          className="bg-white shadow rounded-xl p-2 h-24 flex items-center justify-center text-gray-400"
          style={{ fontSize: "8pt" }}
        >
          📈 Line Chart Placeholder
        </div>

        {/* Card 1 */}
        <div className="bg-white shadow rounded-xl text-center p-2">
          <h2 className="text-gray-600 mt-1" style={{ fontSize: "8pt" }}>
            Weekly Average
          </h2>
          <h1
            className="font-bold m-1 text-orange-600"
            style={{ fontSize: "12pt" }}
          >
            ₹5.45
          </h1>
          <p className="text-gray-500" style={{ fontSize: "7pt" }}>
            Past 7 days
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-xl text-center p-2">
          <h2 className="text-gray-600 mt-1" style={{ fontSize: "8pt" }}>
            Weekly Average
          </h2>
          <h1
            className="font-bold m-1 text-orange-600"
            style={{ fontSize: "12pt" }}
          >
            ₹5.38
          </h1>
          <p className="text-gray-500" style={{ fontSize: "7pt" }}>
            Past 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
