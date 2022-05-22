import { render } from "react-dom";

// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

render(<App />, document.getElementById("root"));
