import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <nav>
//     <h1>My React static page !</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////////////////////
// const page = (
//   <div>
//       <img src="logo192.png" alt="logo react" width="40px"></img>
//       <h1>Fun facts about React</h1>
//           <ul>
//               <li>Was first released in 2013</li>
//               <li>Was originally created by Jordan Walke</li>
//               <li>Has well over 100K stars on GitHub</li>
//               <li>Is maintained by FaceBook</li>
//               <li>Powers thousands of enterprise apps, includin mobile apps </li>
//           </ul>
//   </div> 
// )

// function lapage () {
//   return page
// }
// export default lapage
/////////////////////////////////////////////////////////////////////////////////////////////////

function MyReactPage() {
  return (
      <div>
        <header>
          <nav>
              {/* <img src="logo512.png" alt="logo react" width="40px"></img> */}
              <img src={logo} className="App-logo" alt="logo" width="100px"/>
          </nav>
        </header>
        <h1>Pourquoi j'apprends React ?</h1>
        <p>Dans cette page je vais lister pourquoi je suis hypé par React alors qu'Angular est au programme de l'Ifocop</p>
        <ol>
          <li>C'est LA techno demandée sur le marché !</li>    
          <li>Ca fait classe de dire que tu code avec React</li>    
          <li>Même Kamil a sorti une app en React, alors pourquoi pas moi ?</li>    
        </ol>
        <footer>
          <small>© 2022  NerVod development, All rights reserved </small>
          </footer>
      </div>
      
  )
}
// ReactDOM.render(<MyReactPage /> , document.getElementById("root"));
export default MyReactPage