import { Line } from 'react-chartjs-2';
import logo from '../../assets/images/skilify_logo.png';
import './WeeklySaleStats.scss';

function WeeklySaleStats({ WeeklySales }) {
  const weeklySaleChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: '',
        data: WeeklySales,
        tension: 0.4,
        borderColor: 'hsl(255, 34%, 62%)',
        borderWidth: 1,
      }
    ],
  };

  function Course() {
    return (
      <div className='course'>
        <img src={logo} alt='Course Logo' />
        <div className='course-name'>
          <p>Adobe XD Part 01</p>
          <p style={{fontSize: '0.8em', color: 'gray'}}>UIUX Design</p>
        </div>
        <p className='course-price'>$20</p>
      </div>
    );
  }

  return (
    <div className='weekly-sale-stats-box'>
      <div className='line-chart'>
        <Line 
          data={weeklySaleChartData} 
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: 'Weekly Sales Stats',
                align: 'start',
                color: 'hsl(248, 13%, 42%)',
                font: {
                  size: 18,
                },
              },
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
      <Course />
      <Course />
      <Course />
    </div>
  );
}

export default WeeklySaleStats;