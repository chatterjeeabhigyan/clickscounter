import "./App.css";
import Results from "./pages/Results";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { backend } from "./backendStructure.json";
import Test from "./pages/Test";
import Logout from "./pages/Logout";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [loggedin, setLoggedin] = useState(localStorage.getItem("token")?true:false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    if (theme === "dark") {
      document.body.style.backgroundColor = "#3e4954";
      document.body.style.color = "white";
    } else if (theme === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    const interval = setInterval(() => {
      setLoggedin(localStorage.getItem("token")?true:false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading === true) {
    return (
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar loggedin={loggedin}/>
          <Loader />
          <Footer />
        </ThemeContext.Provider>
      </Router>
    );
  } else {
    return (
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Navbar  loggedin={loggedin}/>
        </ThemeContext.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Home loggedin={loggedin}/>
              </ThemeContext.Provider>
            }
          />
          <Route
            path="/signup"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Signup loading={loading} setLoading={setLoading}/>
              </ThemeContext.Provider>
            }
          />
          <Route
            path="/test"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Test loggedin={loggedin} setLoading={setLoading}/>
              </ThemeContext.Provider>
            }
          />
          <Route 
            path="/login"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Login loading={loading} setLoading={setLoading}/>
              </ThemeContext.Provider>
            }
          />
          <Route
            path="/results"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Results loggedin={loggedin} setLoading={setLoading}/>
              </ThemeContext.Provider>
            }
          />
            <Route
            path="/logout"
            element={
              <ThemeContext.Provider value={{ theme, setTheme }}>
                <Logout loggedin={loggedin} setLoading={setLoading}/>
              </ThemeContext.Provider>
            }
          />
        </Routes>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Footer />
        </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;
