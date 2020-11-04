const React = require("react");

function App() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      Hello {count} from react <button onClick={handleClick}>button</button>
    </div>
  );
}

module.exports.App = App;
