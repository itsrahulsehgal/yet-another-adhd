import logo from '../../assets/images/skilify_logo.png';
import './CourseStatus.scss';

function CourseStatus({ CourseData }) {
  const courses = CourseData.map(course => {
    return (
      <tr>
        {Object.keys(course).map(val => {
          switch (val) {
            case 'name':
              return (
                <td>
                  <img src={logo} alt='Course Logo'/>
                  <span>{course[val]}</span>
                </td>
              );
            case 'rating':
              return (
                <td>
                  <span>&#11088;</span>
                  {course[val]}
                </td>
              );
            default:
              return (
                <td>{course[val]}</td>
              );
          }
        })}
      </tr>
    );
  });

  return (
    <div className='course-status'>
      <table>
      <caption>Course Status</caption>
        <tbody>
          <tr>
            {Object.keys(CourseData[0]).map(val => <th>{val}</th>)}
          </tr>
          {courses}
        </tbody>
      </table>
    </div>
  );
}

export default CourseStatus;