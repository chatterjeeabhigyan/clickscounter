import React, { useEffect, useState } from "react";
import { backend } from "./../backendStructure.json";
import { useNavigate } from "react-router";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - clicks counter";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setLoading(true);
    const response = await fetch(
      `${backend.URL}${backend.LoginUser.Endpoint}`,
      {
        method: backend.LoginUser.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
    // Save the auth token and redirect
    props.setLoading(false);
    localStorage.setItem("token", json.data.token);
    navigate("/");
  };
  if (!localStorage.getItem("token")) {
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: "5em" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email:
              </label>
              <div className="col-sm-4">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password:
              </label>
              <div className="col-sm-4">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-group row" style={{ marginTop: "10px" }}>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  } else {
    return <h1>You are logged in</h1>;
  }
}
