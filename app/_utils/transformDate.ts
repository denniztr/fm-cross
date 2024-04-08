'use client';

const transformDate = (serverLabel: string) => {
  if (serverLabel === 'TODAY') {
    const endDayTime = new Date();
    endDayTime.setHours(23, 59, 59, 59);

    return endDayTime
  }

  if (serverLabel === 'TOMORROW') {
    const startDayTime = new Date();
    startDayTime.setDate(startDayTime.getDate() + 1);
    startDayTime.setHours(0, 0, 0, 0);

    const endDayTime = new Date();
    endDayTime.setDate(endDayTime.getDate() + 1);
    endDayTime.setHours(23, 59, 59, 59);


    return { startDayTime, endDayTime }
  }

  if (serverLabel === 'THIS_WEEK') {
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    const day = today.getDate();
    const monday = today.getDate() - day + (day === 0 ? -6 : 1);
    const sunday = today.getDate() + (7 - day);

    startOfWeek.setDate(monday);
    endOfWeek.setDate(sunday);

    startOfWeek.setHours(0, 0, 0, 0);
    endOfWeek.setHours(23, 59, 59, 59);

    return { startOfWeek, endOfWeek}
  }

  if (serverLabel === 'NEXT_WEEKEND') {
    const today = new Date();
    const startOfWeekend = new Date(today);
    const endOfWeekend = new Date(today);

    const day = today.getDay();

    const saturday = today.getDate() - day + 6;
    const sunday = today.getDate() - day + 7;

    startOfWeekend.setDate(saturday);
    startOfWeekend.setHours(0, 0, 0, 0);

    endOfWeekend.setDate(sunday);
    endOfWeekend.setHours(23, 59, 59, 59);

    return { startOfWeekend, endOfWeekend }
  }

  if (serverLabel === 'NEXT_WEEK') {
    const today = new Date();
    const startOfWeek = new Date(today);
    const endOfWeek = new Date(today);

    const day = today.getDate();
    const nextMonday = today.getDate() - day + (day === 0 ? -6 : 1) + 7;
    const nextSunday = today.getDate() + (7 - day) + 7;

    startOfWeek.setDate(nextMonday);
    endOfWeek.setDate(nextSunday);

    startOfWeek.setHours(0, 0, 0, 0);
    endOfWeek.setHours(23, 59, 59, 59);

    return { startOfWeek, endOfWeek }
  }

  if (serverLabel === 'THIS_MONTH') {
    const today = new Date();
    const startOfMonth = new Date(today);
    const endOfMonth = new Date(today);

    const day = today.getDay();
    const firstDay = today.getDate() - day + 1;

    const currentMonth = today.getMonth() + 1;

    console.log(endOfMonth);

    startOfMonth.setDate(firstDay);
    startOfMonth.setHours(0, 0, 0, 0);

    return { startOfMonth }
  }

  return null
};


export default transformDate;
