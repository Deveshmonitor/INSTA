import React, { useState } from "react";
import { db, ref, set } from "../Firebase"; // Import Firebase Realtime Database methods
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // For generating user ID

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    const userId = uuidv4(); // Generate a unique user ID
    try {
      // Save user data in the Realtime Database under a unique ID
      await set(ref(db, "users/" + userId), {
        email: email,
        password: password, // Make sure to hash or encrypt this in real projects!
      });
      navigate("/home");
    } catch (error) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-sm border-gray-400 border-[1.5px] border-opacity-60">
        <h2 className="text-2xl flex justify-center font-bold text-center mb-6">
          <img src="../../log.png" alt="" />
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs p-2 border focus:border-gray-600 rounded-sm focus:outline-none  "
              placeholder="Phone number, username, or email"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 text-xs border focus:border-gray-600 rounded-sm focus:outline-none "
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-sm font-bold bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Log in
          </button>
        </form>
      </div>
      <p className="p-2">OR</p>
      <p className="text-xs p-2 text-blue-95000">Forgot password?</p>

      <div className="w-96 p-5 flex justify-center items-center  rounded-sm md:border-gray-400 border-[1.5px] border-opacity-60">
        <p className=" text-sm text-center">
          Don't have an account?{" "}
          <a href="https://www.instagram.com/accounts/signup/phone/" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <p className="text-sm p-3">Get the app.</p>
      <div className="flex mt-1 justify-center items-center">
        <img className="h-[40px] w-[140px] mr-2" src="../../public/google.png" alt="" />
        <img className="h-[40px] w-[140px]" src="../../public/microsoft.png" alt="" />
      </div>
    </div>
  );
};

export default Signup;
