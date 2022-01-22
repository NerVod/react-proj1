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

const navbar = (
  <nav>
    <h1>My React static page !</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));

let alerte = function () {
  alert("la page est trouvée");

}
alert()