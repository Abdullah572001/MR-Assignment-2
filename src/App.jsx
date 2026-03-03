import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 py-18">
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
