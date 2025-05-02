import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {

    const {setUser, signInUser} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState("")

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            setUser(user)
            navigate(location.state ? location.state : "/")
        }).catch(() => {
            setError("Invalid Password")
        })
    }

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
        <div className="card-body">
          <h1 className="text-2xl text-center font-bold">Login your account</h1>
          <form onSubmit={handleLogin} className="fieldset space-y-1">
            <label className="label">Email</label>
            <input type="email" name="email" className="input bg-base-200 border-none" placeholder="Email" required />
            <label className="label">Password</label>
            <input type="password" name="password" className="input bg-base-200 border-none" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">Dont’t Have An Account ? <Link className="text-secondary" to="/auth/signup">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
