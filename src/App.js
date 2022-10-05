import './App.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Treemap } from 'recharts';

function App() {

  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]



  return (
    <div className="App">
      <h1>Re-Chart</h1>


      <LineChart width={800} height={400} data={data} >


        <Line type="monotone" dataKey="uv" stroke="#8884d8" />

        <XAxis dataKey="name" />
        <YAxis />

        <Tooltip />
      </LineChart>


      <Treemap
        width={730}
        height={250}
        data={data}
        dataKey="uv"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8" style={{ color: 'red', marginTop: '100px', marginLeft: '50px' }}
      />


    </div>
  );
}

export default App;
