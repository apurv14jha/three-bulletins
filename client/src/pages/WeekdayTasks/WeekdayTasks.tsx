import PersonalTasks from "./PersonalTasks/PersonalTasks";
import WorkTasks from "./WorkTasks/WorkTasks";

const WeekdayTasks = () => {
  return (
    <div>
      <h2>Weekdays</h2>
      <PersonalTasks />
      <WorkTasks />
    </div>
  );
};

export default WeekdayTasks;
