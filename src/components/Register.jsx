import React from "react";
import { FcGoogle } from "react-icons/fc";

const Register = (props) => {
  return (
    <div>
      {props.open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className={`
                    bg-white p-8 h-[75vh] rounded-2xl w-[90%] max-w-md relative 
                    transition-all duration-300 ease-out
                    ${
                      props.showAnim
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90"
                    }
                  `}
          >
            <button
              onClick={() => {
                props.setOpen(false);
              }}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500 hover:font-bold text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col items-center gap-5">
              <form>
                <div className="flex flex-col items-center justify-center gap-5">
                  <div>
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                    <p>
                      Already have account?{" "}
                      <a className="text-blue-500" href="">
                        Login
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-90">
                    <input
                      type="text"
                      className="border p-3 rounded-xl"
                      placeholder="Enter your name"
                      required
                    />
                    <input
                      type="tel"
                      className="border p-3 rounded-xl"
                      placeholder="Enter your phone number"
                      required
                    />
                    <input
                      type="password"
                      className="border p-3 rounded-xl"
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <input type="checkbox" required />
                    <p className="text-xs font-bold">
                      I Agree to the Foodie's{" "}
                      <span className="text-yellow-500">
                        terms & conditions and privacy ploicy
                      </span>
                    </p>
                  </div>
                  <div>
                    <button className="bg-yellow-300 text-white p-3 rounded-xl font-semibold active:scale-95">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
              <hr className="border w-90 text-gray-300" />
              <div className="flex flex-col items-center gap-2">
                <div>Or</div>
                <div className="flex items-center gap-1 active:scale-95 border rounded-2xl py-2 px-4">
                  <div className="">
                    <button>Continue with Google</button>
                  </div>
                  <div>
                    <FcGoogle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
