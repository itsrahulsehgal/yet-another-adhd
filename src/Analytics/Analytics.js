import './Analytics.scss';
import { YearlyData } from '../assets/Data/YearData';
import { WeeklyData } from '../assets/Data/WeekData';
import { CourseData } from '../assets/Data/CourseData';
import Engagements from './Engagements/Engagements';
import Visits from './Visits/Visits';
import Sales from './Sales/Sales';
import CourseStatus from './Courses/CourseStatus';

function Analytics() {
  return (
    <div id='Analytics'>
      <Engagements YearlyData={YearlyData} />
      <Visits YearlyData={YearlyData} WeeklyData={WeeklyData} />
      <Sales YearlyData={YearlyData} WeeklyData={WeeklyData} />
      <CourseStatus CourseData={CourseData} />
    </div>
  );
}

export default Analytics;