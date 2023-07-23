import Card from "./components/card/Card";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
// ! BU BENİM APİ KEYİM   GALİP
  //! const API_KEY ="AIzaSyDa9D78lh4RXb-WpZl9Qd58mM5CL8GIuaY"

  return (
    <div>
      <NavBar/> 
      <Header/>
      <Card/>
    </div>
 
  );
}

export default App;
