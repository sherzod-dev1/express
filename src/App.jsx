
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
import NavLink from "./pages/navLink/NavLink";


const App = () => {
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <Footer />
       <NavLink />
    </div>
  )
}

export default App;