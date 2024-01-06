import { Doughnut } from 'react-chartjs-2';
import logo from '../../assets/images/skilify_logo.png';
import WeeklySaleStats from './WeeklySaleStats';
import './Sales.scss';

function Sales({ YearlyData, WeeklyData }) {
  return (
    <div className='sales'>
      <SaleBox totalSales={[YearlyData[0].sales, YearlyData[1].sales]} />
      <WeeklySaleStats WeeklySales={WeeklyData.map(val => val.sales)} />
      <StudentQueriesBox />
    </div>
  );
}

function SaleBox({ totalSales }) {
  const saleData = {
    label: ['Blue', 'Orange'],
    datasets: [
      {
        label: '',
        data: totalSales,
      }
    ],
  };

  return (
    <div className='sale-box'>
      <div className="doughnut">
        <Doughnut
          data={saleData}
          options={{
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
              title: {
                display: true,
                text: 'Sales',
                align: 'start',
                color: 'hsl(248, 13%, 42%)',
                font: {
                  size: 18,
                },
                padding: {
                  bottom: 40,
                },
              },
            }
          }}
        />
      </div>
      <div>
        <span className='week'>Current Week</span>
        <span>{totalSales[0]}</span>
        <span className='material-symbols-outlined' style={{color: 'green',}}>trending_up</span>
        <span style={{color: 'green', marginLeft: '-50px',}}>+0.3%</span>
      </div>
      <div>
        <span className='week'>Last Week</span>
        <span>{totalSales[1]}</span>
        <span className='material-symbols-outlined' style={{color: 'red',}}>trending_down</span>
        <span style={{color: 'red', marginLeft: '-50px',}}>-0.3%</span>
      </div>
    </div>
  );
}

function StudentQueriesBox() {
  const studentQueries = ['Machine Learning Bootcamp', 'Python & R in Data Science', 'SuperDataScience Support', 'Analyst Bootcamp 2020'];

  return (
    <div className='student-queries-box'>
      <h2>Student Queries</h2>
      {studentQueries.map((query) => {
        return (
          <div className='student-query'>
            <img src={logo} alt='Course Logo' />
            <div className='course-info'>
              <p>{query}</p>
              <p style={{color: 'gray',}}>Data Science</p>
            </div>
            <button className='approval'>Approval</button>
            <button className='decline'>Decline</button>
          </div>
        );
      })}
    </div>
  );
}


export default Sales;