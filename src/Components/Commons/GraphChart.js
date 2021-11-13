import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  Line,
  ComposedChart,   
} from "recharts";
import styled from "styled-components";


const StyledTooltip = styled.div`
    display: inline-block;
    background-color: #0047bb;
    color: #ffffff;    
    border-radius: 0.4rem;    
    width: 76px;
    height: 29px;
    padding: 2px;
    margin: 0 auto;     
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 0;
    
    
  `;

const GraphChart = ({apikey, companySymbol, companyInfo}) => {
  
  const [graphPrice, setGraphPrice] = useState(false);
  const [graphChartData, setGraphChartData]= useState([]);
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <StyledTooltip>
          <p>{`$${payload[0].value}`}</p>
        </StyledTooltip>
      );
    }
    return null;
  };

  useEffect(() => {
    
    fetch(`https://cloud.iexapis.com/stable/stock/${companySymbol}/chart/1m?token=${apikey}`)
    .then(response => response.json())
    .then(data =>{
      if(data){        
        setGraphChartData(data);       

      }
        
    }).catch(err => console.log(err));

    return null;
   
  }, [companySymbol, companyInfo, apikey]);
  return (
    <>
    <div style={{position:'absolute', top:'34rem', left:'2rem', zIndex: '5'}} >
     <input type='checkbox' defaultChecked={graphPrice} onChange={()=> setGraphPrice(s=>!s)} name='showprice' />
    <label htmlFor='showprice'>Show open prices</label> 
    </div>
    
    <ComposedChart
      width={700}
      height={330}
      data={graphChartData}
      margin={{ top: 0, right: 0, left: 20, bottom: 2 }}
      padding={{ bottom: 25 }}
    >
      <CartesianGrid />
      <defs>
        <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="10%" stopColor="#0047BB" stopOpacity={0.9} />
          <stop offset="90%" stopColor="#0047BB" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorClose" x1="0" y1="0" x2="0" y2="1">
          <stop offset="10%" stopColor="#DA70D6" stopOpacity={0.9} />
          <stop offset="90%" stopColor="#DA70D6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="label"
        label={{
          value: "Historical prices (month)",
          angle: 0,
          position: "bottom",
          textAnchor: "middle",
        }}
      />
      <YAxis
        
        tickCount={50}            
        label={{
          value: "Prices (USD)",
          angle: -90,
          position: "insideLeft",
          textAnchor: "middle",          
        }}
      />
      {graphPrice ? (
        <Tooltip
          
          cursor={{ stroke: "blue", strokeWidth: 2 }}          
          content={<CustomTooltip />}
        />
      ) : (
        <Tooltip />
      )}

      <Legend
        width={100}
        wrapperStyle={{
          top: 1,
          right: 1,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "20px",
        }}
      />
      <Area
        type="monotone"
        dataKey="open"
        stroke="#0047BB"
        fillOpacity={1}
        fill="url(#colorOpen)"
      />
      <Area
        type="monotone"
        dataKey="close"
        stroke="#DA70D6"
        fillOpacity={1}
        fill="url(#colorClose)"
      />
      <Line type="monotone" dataKey="high" stroke="#79C300" />
      <Line type="monotone" dataKey="low" stroke="#D64B45" />
    </ComposedChart>  
     
    
    </>
  );
};

export default GraphChart;