import "./App.css";
import Grid from "./Components/Grid/Grid";

function App() {
  return (
    <div className="Background">
      <div className="Top">
        <h1>Sesja Bingo</h1>
      </div>
      <div className="Middle">
        <div className="SideBar"></div>
        <div className="Content">
          <Grid />
        </div>
        <div className="SideBar"></div>
      </div>
      <div className="Bottom"></div>
    </div>
  );
}

export default App;
