import React from "react";

function Signup() {
    return (
        <div className="background">
            <div className="flex items-center justify-center h-[80vh]">
                <div className="grid grid-cols-8 w-[80vw] shadow-2xl">
                    <div className="col-span-3 bg-[#5a0c1d] border h-[65vh]">
                        <h1 className=" flex justify-center items-center text-6xl font-extrabold text-center text-white mt-[12vh] mb-20">
                            Joining<br></br> Jate?
                        </h1>
                        <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-24 md:mb-10">
                            Please enter your details to sign up and be apart of our rapidly growing community!
                        </p>
                        <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-2 font-serif font-semibold">
                            Already a member?
                        </p>
                        <div class="flex items-center justify-center">
                            <button
                                class="w-[200px] rounded-3xl text-[#5a0c1d] hover:bg-[#a21634] hover:text-white hover:border-2 hover:border-white bg-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                type="submit" >
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div className="col-span-5 bg-white h-[65vh]">
                        <div className=" h-[16vh]">
                            <p className="text-[2.8rem] font-bold flex justify-center items-center h-full text-[#5a0c1d] font-serif underline">
                                Welcome to our Family
                            </p>
                        </div>

                        <div class="mb-4 flex mx-10 mt-2 justify-center">
                            <input
                                class=" w-[220px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mr-3"
                                id="first-name"
                                name="first-name"
                                type="text"
                                placeholder="First Name"
                                required>
                            </input>

                            <input
                                class=" flex w-[300px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ml-3"
                                id="las-name"
                                name="las-name"
                                type="text"
                                placeholder="Last Name"
                                required>
                            </input>
                        </div>

                        <div class="mb-4 flex justify-evenly mx-8 mt-10">
                            <input
                                class=" w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mr-3"
                                id="signup-email"
                                name="signup-email"
                                type="text"
                                placeholder="Email Address"
                                required>
                            </input>
                        </div>

                        <div class="mb-4 flex justify-evenly mx-8 mt-10">
                            <input
                                class=" w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mr-3"
                                id="signup-username"
                                name="signup-username"
                                type="text"
                                placeholder="Username"
                                required>
                            </input>
                        </div>

                        <div class="mb-10 flex justify-center mx-8 mt-10">
                            <input
                                class=" w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mr-3"
                                id="signup-password"
                                name="signup-password"
                                type="password"
                                placeholder="Password"
                                required>
                            </input>
                        </div>

                        <div class="flex items-center justify-center">
                            <button
                                class="w-[200px] rounded-3xl text-white hover:bg-[#a21634] hover:text-white   bg-[#5a0c1d] font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;