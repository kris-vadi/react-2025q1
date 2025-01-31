import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Button>Throw Error</Button>
      </main>
    </>
  );
}

export default App;
