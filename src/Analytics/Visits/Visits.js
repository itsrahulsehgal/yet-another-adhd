import './Visits.scss';
import { Line, Bar } from "react-chartjs-2";

function Visits({ YearlyData, WeeklyData }) {
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Course Visits',
        data: YearlyData.map(val => val.visitors),
        tension: 0.4,
        borderColor: 'hsl(13, 94%, 63%)',
        borderWidth: 2,
      },
      {
        label: 'Course Sales',
        data: YearlyData.map(val => val.sales),
        tension: 0.4,
        borderColor: 'hsl(255, 34%, 62%)',
        borderWidth: 2,
      }
    ],
  }
  
  const barChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: '',
        data: WeeklyData.map(val => val.visitors),
        maxBarThickness: 5,
        backgroundColor: 'hsl(248, 13%, 42%)',
      }
    ],
  }

  return (
    <div className='visits'>
      <div className='line-chart'>
        <Line 
          data={lineChartData}
          options={{
            maintainAspectRatio: false,
            elements: {
              point:{
                radius: 0
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Revenue',
                align: 'start',
                color: 'hsl(248, 13%, 42%)',
                font: {
                  size: 18,
                },
              },
              legend: {
                align: 'end',
                labels: {
                  usePointStyle: true,
                },
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: 'gray',
                }
              },
              y: {
                grid: {
                  display: true,
                },
                ticks: {
                  color: 'gray',
                }
              }
            },
          }}
        />
      </div>
      <div className='bar-chart'>
        <Bar 
          data={barChartData}
          options={{
            maintainAspectRatio: false,
            borderRadius: 2,
            plugins: {
              title: {
                display: true,
                text: 'Visitors',
                align: 'start',
                color: 'hsl(248, 13%, 42%)',
                font: {
                  size: 18,
                },
                padding: {
                  bottom: 40,
                },
              },
              legend: {
                display: false,
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: 'gray',
                }
              },
              y: {
                grid: {
                  display: true,
                },
                ticks: {
                  color: 'gray',
                }
              }
            },
          }}
        />
      </div>
    </div>
  );
}

export default Visits;