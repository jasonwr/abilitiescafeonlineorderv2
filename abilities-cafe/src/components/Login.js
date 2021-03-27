import React, { useContext, useRef, useState } from "react";
import { TextInput, Button, Icon } from "react-materialize";
import { useHistory } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);
  // TODO: Display error message when using wrong credentials
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/admin");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="outerBox">
          <h4>Sign In</h4>
          <form onSubmit={onSubmit}>
            <TextInput type="email" label="Email" ref={emailRef} required />
            <TextInput
              type="password"
              label="Password"
              ref={passwordRef}
              required
            />
            <Button
              disabled={loading}
              node="button"
              type="submit"
              waves="light"
            >
              Submit
              <Icon right>send</Icon>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;