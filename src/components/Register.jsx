import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/Register.css"

const Register = (props) => {
  return (
    <div>
      {props.open && (
        <div className="modal-overlay">
          <div
            className={`modal-box ${props.showAnim ? "modal-show" : "modal-hide"}`}
          >
            <button
              onClick={() => props.setOpen(false)}
              className="modal-close"
            >
              ✕
            </button>

            <div className="modal-content">
              <form className="modal-form">
                <div className="modal-header">
                  <h2>Sign up</h2>
                  <p>
                    Already have an account?{" "}
                    <a href="#" className="link-blue">
                      Login
                    </a>
                  </p>
                </div>

                <div className="input-group">
                  <input type="text" placeholder="Enter your name" required />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="terms">
                  <input type="checkbox" required />
                  <p>
                    I agree to Foodie’s{" "}
                    <span className="highlight">
                      terms & conditions and privacy policy
                    </span>
                  </p>
                </div>

                <button className="primary-btn">Create account</button>
              </form>

              <hr />

              <div className="google-auth">
                <span>Or</span>
                <button className="google-btn">
                  Continue with Google <FcGoogle />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
