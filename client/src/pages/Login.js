import React from "react";
import tacos from '../images/tacos1.png'
import '../styles/Navbar.css'

function Login() {
    return (
        <div  className="background"> 
        
        <div className="flex items-center justify-center h-[80vh] bg-">
        <div className=" grid grid-cols-8 w-[80vw] shadow-2xl">
            <div className="col-span-5 bg-white border h-[65vh] ">
               <h1 className="text-5xl font-serif flex justify-center items-center py-16 text-[#5a0c1d]">
                Welcome Back friend!
                </h1>
               
               <h1 className="text-[2.5rem] text-[#5a0c1d] font-extrabold text-center mb-10">Login to Your Account</h1>


<div class="flex items-center justify-center">
  <div class="bg-white p-8 border-l-[10px] border-b-[10px] border-[#dfa196] ">
    
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-1 " for="username">
          
        </label>
        <input
          class=" w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          required>
        </input>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-1 " for="password">
          
        </label>
        <input
          class="w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="flex items-center justify-center">
        <button
          class="w-[200px] rounded-3xl bg-[#5a0c1d] hover:bg-[#a21634] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        
      </div>
    </form>
  </div>
</div>

            </div>
            <div className="col-span-3 bg-[#5a0c1d]">
                <h1 className=" flex justify-center items-center text-6xl font-extrabold text-center text-white mt-[15vh] mb-14">
                    First Time<br></br> Here?
                </h1>
                <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-24">
                    Sign up and become a member today for discounts, updates, and plenty more!
                </p>

                <div class="flex items-center justify-center">
        <button
          class="w-[200px] rounded-3xl text-[#5a0c1d] hover:bg-[#a21634] hover:text-white hover:border-2 hover:border-white bg-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
        
      </div>

            </div>

            </div>
        </div>
        </div>
        
    )
}

export default Login;



// [#5a0c1d]

// forgot password code below if we need it


{/* <a class="inline-block align-baseline font-bold text-sm text-[#7d1234] hover:text-[#5a0c1d]" href="#">
          Forgot Password?
        </a> */}