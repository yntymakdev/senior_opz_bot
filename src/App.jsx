import "./App.scss";
import Table from "./components/table/Table";

function App() {
  function handleClick() {
    alert("oops");
  }
  return (
    <>
      <Table onClick={handleClick} />
    </>
  );
}

export default App;
