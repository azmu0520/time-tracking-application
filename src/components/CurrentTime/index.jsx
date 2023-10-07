import React from "react";
import { Wrap } from "./style";
import { Card } from "antd";

export default function Time() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <Card>
      <Wrap variant="outlined">{date.toLocaleTimeString()}</Wrap>
    </Card>
  );
}
