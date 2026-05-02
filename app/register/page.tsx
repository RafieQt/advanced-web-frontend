"use client";
import Link from "next/link";
import authImg from "../assets/authenticationImg.png";
import Image from "next/image";
import { z } from "zod";
import { FormEvent, useState } from "react";
import axios from "axios";

// ZOD schema for register
const registerSchema = z.object({
  username: z.string().min(1, "Username is short."),
  fullname: z.string().min(1, "Full Name is short."),
  email: z
    .string("It is not a string.")
    .email("Invalid Email.")
    .min(1, "The email is too small."),
  password: z.string().min(6, "Password must be 6 characters."),
});

type RegisterData = z.infer<typeof registerSchema>;

export default function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = registerSchema.safeParse({
      username,
      fullname,
      email,
      password,
    });

    const userInfo = {
      username,
      fullname,
      email,
      password
    }

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    try{
      const res = await axios.post('http://localhost:4000/customer/create', userInfo)
      console.log(res);
    }catch(error){
      console.log(error);
    }

    
  };

  return (
    <div className="bg-[#FAF7F2] h-screen">
      <div className="bg-white w-7/12 mx-auto my-20 rounded-2xl h-110 min-h-fit p-5 px-8 shadow-2xl">
        <h2 className="text-[#1F2937] text-3xl font-bold">Register</h2>

        <div className="flex justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col ">
            {/* Username */}
            <label className="mt-3">Username:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="text"
              placeholder="Your Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Full Name */}
            <label className="mt-3">Full Name:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="text"
              placeholder="Your Full Name"
              onChange={(e) => setFullname(e.target.value)}
            />

            {/* Email */}
            <label className="mt-3">Email:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <label className="mt-3">Password:</label>
            <input
              className="border-1 rounded-xl p-1 w-80"
              type="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button
              type="submit"
              className="bg-[#111827] text-white font-semibold text-center w-40 mt-3 rounded-xl py-1 mx-auto"
            >
              Register
            </button>
            <p className="text-center my-2">
              Already a User?{" "}
              <Link
                className="hover:cursor-pointer hover:underline"
                href="/Login"
              >
                Log In
              </Link>{" "}
            </p>
          </form>
          <Image className="w-80 h-80" src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
}
