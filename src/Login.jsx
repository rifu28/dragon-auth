import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-1/2 mx-auto mt-10 bg-gray-50 p-3">
        <h2 className="text-2xl font-semibold text-center mb-5 mt-3">
          Login Your Account Here
        </h2>
        <hr />
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
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
              <span className="label-text font-semibold">Password</span>
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
              Don't have an account ?
              <Link to="/register">
                <span className="text-green-600"> Register</span>
              </Link>
            </h2>
          </div>
        </form>
      </div>{" "}
    </div>
  );
};

export default Login;
