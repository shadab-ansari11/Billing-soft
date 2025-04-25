import React, { useEffect, useState } from 'react';

const CurrentDate = () => {

  const [currentDate, setCurrentDate] = useState('');
useEffect(() => {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  setCurrentDate(`${date}/${month}/${year}`);
}, []);

  return (
    <div>
      <h1>Current Date: {currentDate}</h1>
    </div>
  );
};

export default CurrentDate;
