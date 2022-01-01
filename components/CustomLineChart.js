import React from "react";
import Theme from "../Theme";
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const CustomLineChart = ({data}) => {

  let highestValue = 0
  for (let i=0; i<data.length; i++) {
    if (data[i] > highestValue) {
      highestValue = data[i]
    }
  }

  let upperLimit = (highestValue * 1.1).toPrecision(2)

  const getMonthString = (monthNumber) => {
    let month = ""
    switch (monthNumber) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
        break;
      case 2:
        month = "Mar";
        break;
      case 3:
        month = "Apr";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "Jun";
        break;
      case 6:
        month = "Jul";
        break;
      case 7:
        month = "Aug";
        break;
      case 8:
        month = "Sep";
        break;
      case 9:
        month = "Oct";
        break;
      case 10:
        month = "Nov";
        break;
      case 11:
        month = "Dec";
    }
    return month
  }

  return (
    <Chart
      style={{ height: '100%', width: '90%' }}
      data={[
        { x: 0, y: data[0] },
        { x: 1, y: data[1] },
        { x: 2, y: data[2] },
        { x: 3, y: data[3] },
        { x: 4, y: data[4] },
        { x: 5, y: data[5] },
        { x: 6, y: data[6] },
        { x: 7, y: data[7] },
        { x: 8, y: data[8] },
        { x: 9, y: data[9] },
        { x: 10, y: data[10] },
        { x: 11, y: data[11] }
      ]}
      padding={{ left: 45, bottom: 20, right: 10, top: 10 }}
      xDomain={{ min: 0, max: 11 }}
      yDomain={{ min: 0, max: upperLimit }}
    >
      <VerticalAxis tickCount={5} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
      <HorizontalAxis tickCount={12} theme={{ labels: { formatter: (v) => getMonthString(v) } }} />
      <Area theme={{ gradient: { from: { color: Theme.colours.card }, to: { color: Theme.colours.button, opacity: 0.4 } }}} />
      <Line theme={{ stroke: { color: Theme.colours.button, width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
    </Chart>
  );
};

export default CustomLineChart;