import Navbar from "./components/Navbar";
import Hastoken from "./components/Hastoken";
import { useState } from "react";


const App = () => {
  let [user,setuser]=useState(null)
  return (
    <div className="bg-black min-h-screen">
      <Navbar setuser={setuser} />
      <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
          <h1 className="text" >
            WEB3 TESTING APPLICATION
          </h1>
        </div>
        <div className="mt-20 flex justify-center">
          <Hastoken user={user} />
        </div>
      </div>
    </div>
  );
};

export default App;
