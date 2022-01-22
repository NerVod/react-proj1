const React = require("react");
const ReactDOM = require("react-dom");

// ReactDOM.render(<h1 className = "header">Hello, Everyone !</h1>, document.getElementById("root"));

// ReactDOM.render(<h2>Bonjour la compagnie</h2>, document.getElementById("root"));

// ReactDOM.render(
//   <ul>
//     <li>première ligne</li>
//     <li>Deuxième ligne</li>
//   </ul>,
//   document.getElementById("root")
// );

// ReactDOM.render(<h1 className = "header">Hello, Everyone !</h1>, document.getElementById("root"));

// const navbar = (
//   <nav>
//     <h1>My React static page !</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navbar, document.getElementById("root"));

const page = (
  <div>
      <img src="./react-logo.png" alt="logo react" width="40px"></img>
      <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100K stars on GitHub</li>
              <li>Is maintained by FaceBook</li>
              <li>Powers thousands of enterprise apps, includin mobile apps </li>
          </ul>
  </div> 
)



ReactDOM.render(page, document.getElementById("root"))