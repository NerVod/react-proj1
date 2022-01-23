import logo from "./logo.svg";
import "./App.css";

import Header from "./js/Headers"
import Corps from "./js/Corps"
import Footer from "./js/Footer"

    function MyReactPage() {
  return (
    <div>
        <Header />
        <Corps />
        <Footer />
    </div>
      
  )
}
// ReactDOM.render(<MyReactPage /> , document.getElementById("root"));
export default MyReactPage