import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <fieldset className="fieldset space-y-1">
            <label className="label">Email</label>
            <input type="email" className="input bg-base-200 border-none" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input bg-base-200 border-none" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/signup">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
