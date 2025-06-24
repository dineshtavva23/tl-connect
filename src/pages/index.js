import { useState } from "react";
import { useRouter } from "next/router";



export default function Home() {
  const[role,setRole]= useState('');
  const router = useRouter();


  const handleLogin=()=>{
    if(role){
      localStorage.setItem('userRole',role);
      router.push('/dashboard')
    }
  };
  


  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl text-black font-bold mb-6 text-center">TL Connect Login</h1>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full text-black border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Role</option>
          <option value="core">Core</option>
          {/* <option value="lead">Domain Lead</option>
          <option value="member">Member</option> */}
          <option value="student">Student</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
