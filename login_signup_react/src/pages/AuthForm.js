import React, { useRef, useEffect } from "react";
import "../css/AuthForm.css";
import useAuthForm from "../hooks/useAuthForm";

function AuthForm() {
  const checkBoxRef = useRef(null);
  const navigateToLogin = () => {
    if (checkBoxRef.current) {
      checkBoxRef.current.checked = false;
    }
  };
  const {
    handleLoginClick,
    handleSignUpClick,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    setErrors, // Make sure to destructure setErrors
    clearErrors,
    resetInputs,
  } = useAuthForm(navigateToLogin);

  useEffect(() => {
    // Store original body styles to restore them later
    const originalStyle = document.body.style.cssText;

    // Apply your styles to body when the component mounts
    document.body.style.minHeight = "100vh";
    document.body.style.width = "100%";
    document.body.style.backgroundColor = "#f5615e";
    document.body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

    // Return a cleanup function to revert to the original styles
    // when the component unmounts
    return () => {
      document.body.style.cssText = originalStyle;
    };
  }, []);

  return (
    <div className="container_auth">
      <input
        ref={checkBoxRef}
        type="checkbox"
        id="check"
        onChange={() => {
          clearErrors();
          resetInputs(); // Reset inputs when switching forms
        }}
      />

      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          <div className="error">{errors.email}</div>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />
          <div className="error">{errors.password}</div>

          <a href="#">Forgot Password?</a>
          <input
            type="button"
            className="button"
            value="Login"
            onClick={handleLoginClick}
          />
        </form>

        <div className="signup">
          <span className="signup">
            Don't have an account?
            <label htmlFor="check">Sign Up</label>
          </span>
        </div>
      </div>

      <div className="registration form">
        <header>Sign Up</header>
        <form action="#">
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          <div className="error">{errors.email}</div>

          <input
            type="password"
            placeholder="Create your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />
          <div className="error">{errors.password}</div>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }}
          />
          <div className="error">{errors.confirmPassword}</div>

          <input
            type="button"
            className="button"
            value="Sign Up"
            onClick={handleSignUpClick}
          />
        </form>

        <div className="signup">
          <span className="signup">
            Already have an account?
            <label htmlFor="check">Login</label>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
