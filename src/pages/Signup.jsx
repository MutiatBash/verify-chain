import React from "react";
import { useState, useEffect, useRef } from "react";
import Logo from "/logo.svg";
import discord from "/discord.svg";
import google from "../assets/images/google.svg";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { IconButton } from "../components/Button";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useAccount, useDisconnect, useEnsAvatar, useConnect } from "wagmi";
// import {ConnectButton} from "@rainbow-me/rainbowkit";
import { CustomConnectButton } from "../components/ConnectButton";
import { ThreeCircles, Oval } from "react-loader-spinner";

export const SignUp = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const {
    address: userData,
    isConnected: userConnected,
    isDisconnected: userDisconnected,
    isConnecting: userConnecting,
  } = useAccount();

  // const {isLoading:userConnecting} = useConnect({connector: new InjectedConnector()})
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // if (userDisconnected) {
    //   navigate("/signin");
    //   // setLoading(false);
    // }
    if (userConnected) {
      // setLoading(false);
      navigate("/dashboard");
    }
    //  else {
    //   // setLoading(false);
    // }
  }, []);

  // SIGNUP USER
  //   const handleSignUp = async (e) => {
  //     setLoading(true);
  //     e.preventDefault();
  //     if (!email.trim() || !password.trim()) {
  //       setError("All fields are required");
  //     } else {
  //       setError("");
  //     }

  //     try {
  //       const response = await createUserWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );

  //       console.log(response);
  //       setTimeout(() => {
  //         setLoading(false);
  //         navigate("/signin");
  //       }, 1500);

  //       alert("Your account has been created");
  //     } catch (error) {
  //       console.error(error.message);
  //       setLoading(false);
  //       setError(error.message);
  //     }
  //   };

  return (
    <div className="p-2 sm:py-8 sm:px-24 mx-auto flex flex-col justify-center gap-5 lg:gap-8 items-center my-auto min-h-screen w-full">
      <div className="flex flex-row gap-3 items-center justify-center">
        <img src={Logo} alt="logo" />
        <h5 className="font-bold">Verify Chain</h5>
      </div>
      <div>
        <h2 className="text-center font-bold text-[1.5rem] sm:text-[2rem]">
          Connect your wallet
        </h2>
        <p className="text-center pb-3">Create your account</p>
      </div>
      <form className="flex bg-white flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full max-w-lg justify-between sm:w-[80%] md:w-[75%] lg:w-[60%]">
        {error ? <span className="text-red-600 text-xs">{error}</span> : ""}
        <div className="flex flex-col justify-between">
          <label className="font-[500] py-2">Email Address</label>
          <input
            placeholder="Email address"
            className="border rounded lg:rounded-lg p-2 lg:py-3 w-full focus:outline-none focus:border-gray-400"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center gap-2 py-2">
          {loading ? (
            <div className="bg-[#7f56d9] rounded-xl w-full p-3 flex flex-row items-center gap-2 justify-center text-white font-semibold">
              <span>Connecting</span>
              {
                <ThreeCircles
                  height="35"
                  width="40"
                  color="#fff"
                  visible={true}
                  ariaLabel="three-circles-rotating"
                />
              }{" "}
            </div>
          ) : (
            <CustomConnectButton />
          )}

          <div>
            <hr></hr>
            <span>OR</span>
            <hr></hr>
          </div>

          <div className="flex flex-col gap-5 py-10 w-full">
            <IconButton
              text={"Sign up with Email"}
              className="rounded-xl w-full"
            />
            <IconButton
              icon={discord}
              className="w-full rounded-xl"
              text={"Sign up with Discord"}
            />
            <IconButton
              icon={google}
              className="w-full rounded-xl"
              text={"Sign up with Google"}
            />
          </div>
          <p className="text-center pt-1">
            Already have an account?
            <Link
              className="text-purple-700 hover:text-purple-800 font-[600] hover:font-bold px-1"
              to="/signin"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
