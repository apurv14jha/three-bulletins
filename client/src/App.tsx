import WeekdayTasks from "./pages/WeekdayTasks/WeekdayTasks";
import WeekendTasks from "./pages/WeekendTasks/WeekendTasks";

const App = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <WeekdayTasks />
      <WeekendTasks />
    </div>
  );
};

export default App;
