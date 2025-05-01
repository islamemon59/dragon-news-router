import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">
            Register your account
          </h1>
          <fieldset className="fieldset space-y-1">
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your name"
            />
            <label className="label">Phot URL</label>
            <input
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input bg-base-200 border-none"
              placeholder="Enter your email address"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input bg-base-200 border-none"
              placeholder="Enter your password"
            />
            <label className="label mt-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Terms & Conditions
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">Already Have An Account ? <Link className="text-secondary" to="/auth/login">Login</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
