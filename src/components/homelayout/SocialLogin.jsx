import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SocialLogin = () => {

  const {setUser, signInWithGoogle, signInWithGithub} = use(AuthContext)

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user
      setUser(user)
    }).catch(error => {
      console.log(error)
    })
  }

  const handleGithubLogin = () => {
    signInWithGithub()
    .then(result => {
      const user = result.user
      setUser(user)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={handleGoogleLogin} className="btn btn-secondary btn-outline w-full">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
