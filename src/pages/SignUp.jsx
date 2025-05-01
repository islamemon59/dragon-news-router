import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {

    const {createUser} = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then(result => {
        console.log(result.user)
    }).catch(error => {
        console.log(error.message)
    })
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">
            Register your account
          </h1>
          <form onSubmit={handleRegister} className="fieldset space-y-1">
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your name"
              required
            />
            <label className="label">Phot URL</label>
            <input
              name="photo"
              type="text"
              className="input bg-base-200 border-none"
              placeholder="Enter your photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input bg-base-200 border-none"
              placeholder="Enter your email address"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input bg-base-200 border-none"
              placeholder="Enter your password"
              required
            />
            <label className="label mt-3">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Terms & Conditions
            </label>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
