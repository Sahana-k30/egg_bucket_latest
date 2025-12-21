import { useState, useEffect } from 'react';
import Entryform from '../components/Entryform';
import Rateanalytics from '../components/Rateanalytics';
import Table from '../components/Table';

const Neccrate = () => {
  const [rows, setRows] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const blockedDates = rows.map(row => row.date);

  const filteredRows = rows.filter((row) => {
    if (!fromDate || !toDate) return true;

    const rowDate = new Date(row.date);
    const from = new Date(fromDate);
    const to = new Date(toDate);

    return rowDate >= from && rowDate <= to;
  });

  useEffect(() => {
    const savedData = localStorage.getItem("neccRates");
    if (savedData) setRows(JSON.parse(savedData));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("neccRates", JSON.stringify(rows));
    }
  }, [rows, isLoaded]);

  const addRow = (newRow) => {
    setRows([newRow, ...rows]);
  };

  return (
    <div className="min-h-screen bg-eggBg px-4 py-6 md:px-8 flex">
      <div className="w-full">
        <div className="ml-3 bg-eggWhite min-h-full w-full max-w-[1200px] px-4 overflow-x-hidden mx-auto">
          <Table
            rows={filteredRows}
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
          <Rateanalytics />
          <Entryform addRow={addRow} blockedDates={blockedDates} />
        </div>
      </div>
    </div>
  );
};

export default Neccrate;
