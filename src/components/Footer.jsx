import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <footer className="page-footer font-small teal pt-1" style={{ backgroundColor: "#36393F", color: "white", position: "absolute", bottom: "0", width: "100%"}}>
      <button type="button" className="btn btn-primary btn-lg" onClick={() => { setTheme(theme==="dark"?"light":"dark") }}>{theme==="dark"?"Light":"Dark"} Theme</button>
        <div className="footer-copyright text-center py-2" style={{backgroundColor:"#324191"}}>
          © 2021 Copyright: Clicks Counter
        </div>
      </footer>
    </React.Fragment>
  );
}
