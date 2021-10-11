import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400, v: 100},{name: 'Page B', uv: 200, pv: 1200, amt: 2400, v: 200},{name: 'Page C', uv: 300, pv: 1200, amt: 2400, v: 300}];
// {name: 'Page D', uv: 250, pv: 1200, amt: 2400, v:400}

const GraphChart = () => {
    return (
        <LineChart width={700} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />

        </LineChart>
    );
}

export default GraphChart;
