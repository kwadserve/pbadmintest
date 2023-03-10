import React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart,
  Pie,
  Cell
} from 'recharts';
import {
  purple, red, pink, indigo, blue, cyan, teal
} from '@mui/material/colors';
import { data6 } from './sampleData';
const colors = [red[500], pink[500], purple[500], indigo[500], blue[500], cyan[500], teal[500]];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + ((outerRadius - innerRadius) * 0.5);
  const x = cx + (radius * Math.cos(-midAngle * RADIAN));
  const y = cy + (radius * Math.sin(-midAngle * RADIAN));

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

renderCustomizedLabel.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  midAngle: PropTypes.number,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  percent: PropTypes.number,
};

renderCustomizedLabel.defaultProps = {
  cx: 0,
  cy: 0,
  midAngle: 0,
  innerRadius: 0,
  outerRadius: 0,
  percent: 0,
};

function PieCustomLabel() {
  return (
    <PieChart
      width={800}
      height={400}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Pie
        dataKey="value"
        data={data6}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={160}
        fill="#8884d8"
      >
        {
          data6.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
        }
      </Pie>
    </PieChart>
  );
}

export default PieCustomLabel;
