import Link from "next/link";
import Image from "next/image";
import authImg from "../assets/authenticationImg.png";
export default function Login() {
  return (
    <div className="bg-[#FAF7F2] h-screen">
      <div className="bg-white w-7/12 mx-auto my-20 rounded-2xl h-110 p-5 px-8 shadow-2xl">
        <h2 className="text-[#1F2937] text-3xl font-bold">Sign In</h2>
        <div className="flex justify-between items-center">
          <form className="flex flex-col">
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
              Sign In
            </button>
            <p className="text-center my-2">
              New User?{" "}
              <Link
                className="hover:cursor-pointer hover:underline"
                href="/register"
              >
                Register
              </Link>{" "}
            </p>
          </form>
          <Image className="w-80 h-80" src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
}
