import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/2 mx-auto mt-10 bg-gray-50 p-3 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-5 mt-3">
          Register Your Account
        </h2>
        <hr />
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Your Name <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input bg-slate-100 rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Photo URL <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input bg-slate-100 rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Email Address <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input bg-slate-100 rounded-sm"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Password <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-slate-100 rounded-sm"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-zinc-500 rounded-sm text-white font-semibold">
              Login
            </button>
            <h2 className="font-semibold mt-3 text-center">
              Already have an account ?
              <Link to="/login">
                <span className="text-blue-600"> Login</span>
              </Link>
            </h2>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Register;
