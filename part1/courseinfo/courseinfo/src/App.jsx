// Component 1 - Header takes care of rendering the name of the course
const Header = ({ course }) => {
  // console.log(course);
  return (
    <div>
      {" "}
      <p>Course name: {course}</p>{" "}
    </div>
  );
};

// Component 2 - Content renders the parts and their number of exercises
const Content = (props) => {
  // console.log(props.parts[0]);
  return (
    <div>
      <p>
        {props.parts[0].name} has {props.parts[0].exercises} exercises
      </p>
      <p>
        {props.parts[1].name} has {props.parts[1].exercises} exercises
      </p>
      <p>
        {props.parts[2].name} has {props.parts[2].exercises} exercises
      </p>
    </div>
  );
};

// // Component 3 - Total renders the total number of exercises
const Total = (props) => {
  console.log(props);
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <div>Total exercises: {total}</div>;
};

const App = () => {
  // const course = "Half Stack application development";

  // const parts = [
  //   { name: "Fundamentals of React", exercises: 10 },
  //   { name: "Using props to pass data", exercises: 7 },
  //   { name: "State of a component", exercises: 14 },
  // ];

  const courses = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </div>
  );
};

export default App;
