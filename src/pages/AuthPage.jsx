import React from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const AuthPage = () => {
    const navigate = useNavigate();
    const handleGoogle=()=>{
        signInWithPopup(auth, provider).then(() => navigate('/feed'));
    }
    const handleGitHub=()=>{

    }
  return (
    <section className="h-screen grid place-items-center">
      <div className="bg-black flex flex-col gap-10 py-16 px-32 rounded-lg">
        <h1 className="text-center font-bold text-xl">
          Not Defterine Giriş Yap
        </h1>
        <div>
          <button onClick={handleGoogle} className="flex items-center bg-white py-2 px-10 rounded-full text-black gap-3 cursor-pointer transition hover:bg-gray-300">
            <img className="h-[20px]" src="google.png" alt="google-logo" />
            <span className="whitespace-nowrap">Google İle Giriş Yap</span>
          </button>
        </div>
        <div>
          <button onClick={handleGitHub} className="flex items-center bg-white py-2 px-10 rounded-full text-black gap-3 cursor-pointer transition hover:bg-gray-300">
            <img className="h-[20px]" src="github-logo.png" alt="github-logo" />
            <span>GitHub İle Giriş Yap</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
