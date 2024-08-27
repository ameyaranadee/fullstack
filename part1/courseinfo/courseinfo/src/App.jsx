// Component 1 - Header takes care of rendering the name of the course
const Header = (props) => {
  return (
    <div>
      <p>Course name: {props.course}</p>
    </div>
  );
};

// Component 2 - Content renders the parts and their number of exercises
const Content = (props) => {
  console.log(props.parts[0]);
  return (
    <div>
      <p>
        {props.parts[0].name} has {props.parts[0].exercises} exercises
      </p>
    </div>
  );
};

// Component 3 - Total renders the total number of exercises
const Total = (props) => {
  console.log(props);
  return <div>Total exercises: {props.parts}</div>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        parts={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
