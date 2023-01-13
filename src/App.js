import "./App.css";
import {
  BroserRouter,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes></Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
