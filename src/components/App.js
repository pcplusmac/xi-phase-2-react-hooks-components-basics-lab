import React from "react";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";


// function Home() {
//   return (
//     <div id="home">
//       <h1>Home</h1>
//     </div>
//   );
// }

{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
