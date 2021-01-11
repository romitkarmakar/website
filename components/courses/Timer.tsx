import React from "react";

export default function Timer(props: any) {
  const [day, setDay] = React.useState(0);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const endDate = new Date(props.EnrollmentLastDate).getTime();
  let timer;

  React.useEffect(() => {
    timer = setInterval(function () {
      let current_timestamp = new Date().getTime();
      let t = endDate - current_timestamp;

      if (t >= 0) {
        setDay(Math.floor(t / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinute(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
        setSecond(Math.floor((t % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="flex flex-col items-center p-2">
        <p className="p-1 text-white text-3xl">{day}</p>
        <p className="p-1 text-white text-lg">Days</p>
      </div>
      <div className="flex flex-col items-center p-2">
        <p className="p-1 text-white text-3xl">{hour}</p>
        <p className="p-1 text-white text-lg">Hours</p>
      </div>
      <div className="flex flex-col items-center p-2">
        <p className="p-1 text-white text-3xl">{minute}</p>
        <p className="p-1 text-white text-lg">Minutes</p>
      </div>
      <div className="flex flex-col items-center p-2">
        <p className="p-1 text-white text-3xl">{second}</p>
        <p className="p-1 text-white text-lg">Seconds</p>
      </div>
    </div>
  );
}
