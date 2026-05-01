
import Link from "next/link";
import authImg from "../assets/authenticationImg.png";
import Image from "next/image";

export default function Register() {
  return (
    <div className="bg-[#FAF7F2] h-screen">
      <div className="bg-white w-7/12 mx-auto my-20 rounded-2xl h-110 p-5 px-8 shadow-2xl">
        <h2 className="text-[#1F2937] text-3xl font-bold">Register</h2>

        <div className="flex justify-between">
          <form className="flex flex-col ">
            {/* Username */}
            <label className="mt-3">Username:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="text"
              placeholder="Your Username"
            />

            {/* Full Name */}
            <label className="mt-3">Full Name:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="text"
              placeholder="Your Full Name"
            />

            {/* Email */}
            <label className="mt-3">Email:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="email"
              placeholder="Your Email"
            />

            {/* Password */}
            <label className="mt-3">Password:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="password"
              placeholder="Your Password"
            />

            <button className="bg-[#111827] text-white font-semibold text-center w-40 mt-3 rounded-xl py-1 mx-auto">
              Register
            </button>
            <p className="text-center my-2">Already a User? <Link className="hover:cursor-pointer hover:underline" href='/Login'>Log In</Link> </p>
          </form>
          <Image className="w-80 h-80" src={authImg} alt="" />
          
        </div>
      </div>
    </div>
  );
}
