import React from 'react';
import Dailyheader from '../components/Dailyheader';
import DailyTable from '../components/DailyTable';
import Dailyentryform from '../components/Dailyentryform';
import Weeklytrend from '../components/Weeklytrend';
import { useState, useEffect } from 'react';

const Dailysales = () => {
  const [rows, setRows] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedDate = localStorage.getItem("dailySales");
    if (savedDate) setRows(JSON.parse(savedDate));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("dailySales", JSON.stringify(rows));
    }
  }, [rows, isLoaded]);

  const blockeddates = rows.map(row => row.date);

  const addrow = (newrow) => {
    setRows(prev => [newrow, ...prev]);
  };

  return (
    <div className="min-h-screen bg-eggBg px-4 py-6 md:px-8 flex">
      <div className='w-full'>
        <div className='bg-eggWhite min-h-full p-4 w-full max-w-[1200px] overflow-x-hidden mx-auto'>
          <Dailyheader />
          <DailyTable rows={rows} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="md:col-span-2">
              <Dailyentryform addrow={addrow} blockeddates={blockeddates} />
            </div>

            <div className="flex flex-col">
              <Weeklytrend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dailysales;
