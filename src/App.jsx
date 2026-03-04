import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";
import { ToastContainer, toast } from 'react-toastify';


const ticketsFetch = async () => {
    const res = await fetch('/data.json');
    return res.json();
}
const ticketsPromise = ticketsFetch();

function App() {

  const [task, setTask] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 py-18">
        <Banner task={task}></Banner>
        <Suspense fallback={<div className="flex justify-center items-center mt-20"><span className="loading loading-spinner loading-xl text-error"></span></div>}>
          <Tickets task={task} setTask={setTask} ticketsPromise={ticketsPromise}></Tickets>
        </Suspense>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
