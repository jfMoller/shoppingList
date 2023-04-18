interface Rows {
  row: number;
  color: string;
  caption: string;
}

interface Cols {
  col: number;
  rows: Rows[];
  caption: string;
}

interface Day {
  day: string;
  dayNumber: number;
  enabled: boolean;
  cols: Cols[];
}

interface Week {
  weekNumber: number;
  days: Day[];
}

interface MockData {
  weeks: Week[];
}

export const data: MockData = {
  weeks: [],
};

const weeksToAdd = 1;
const daysPerWeek = 7;
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 1; i <= weeksToAdd; i++) {
  const week: Week = {
    weekNumber: data.weeks.length + 1,
    days: [],
  };

  for (let j: number = 1; j <= daysPerWeek; j++) {
    const today = new Date();
    console.log(today.getMonth() + 1)
    const day: Day = {
      day: days[j - 1],
      dayNumber: j,
      enabled: true,
      cols: [
        {
          col: j,
          rows: [{ row: j, color: "white", caption: (today.getDate() + j - 1).toString() + "/" + (today.getMonth() + 1).toString() }],
          caption: "col-test",
        },
      ],
    };
    week.days.push(day);
  }

  data.weeks.push(week);
}
