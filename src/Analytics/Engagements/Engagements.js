import './Engagements.scss';
import { Line } from "react-chartjs-2";

function Engagements({ YearlyData }) {
  const Impressions = ['Impressions', 'Total audience', 'Engagements', 'Engaged audience'];
  return (
    <div className='engagements'>
      {Impressions.map(impression => <StatsBox title={impression} userData={YearlyData.map(val => val.visitors)} />)}
    </div>
  );
}

function StatsBox({ title, userData }) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'User Data',
        data: userData,
        tension: 0.4,
        pointStyle: false,
        borderColor: 'hsl(255, 34%, 62%)',
        borderWidth: 2,
      }
    ],
  };
  
  return (
    <div className='stats-box'>

      <div className='title'>
        <h3>{title}</h3>
        <p>{userData.reduce((sum, val) => {return sum + val}, 0)}</p>
      </div>

      <div className='line-chart'>
        <Line
          data={data}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            elements: {
              point:{
                radius: 0
              }
            },
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              }
            },
          }}
        />
      </div>
    </div>
  );
}

export default Engagements;