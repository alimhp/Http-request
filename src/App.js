import AddComponent from "./component/AddComponent";
import DetailComponent from "./component/DetailComp";
import MainComponent from "./component/MainComponent";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section>
        <DetailComponent />
      </section>
      <section>
        <MainComponent />
      </section>
      <section>
        <AddComponent />
      </section>
    </div>
  );
};

export default App;
