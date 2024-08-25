const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Hello world {props.name} is {props.age} years old{" "}
      </p>
    </div>
  );
};

const App = () => {
  const name = "Ameya";
  const age = 23;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="John" age={age + 10} />
    </div>
  );
};

export default App;
