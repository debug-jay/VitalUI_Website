import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () =>{

var firstname = new String();
var lastname = new String();
var email = new String();
var password = new String();




function TestBox()
{
    window.alert("Add Logic For Login here! ");

    



}



    return(
        <>
<div className='flex h-screen'>
<span className="font-semibold text-white text-2xl tracking-wider absolute left-4 sm:left-28 m-4"><Link to="/">VitalUI</Link></span>
<div class=" px-4 py-16 mx-auto sm:px-6 lg:px-8">

  <div class="max-w-lg mx-auto text-center mt-36">

    <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

    <p class="mt-4 text-gray-500">
        Please fill out the following to signup for an account!
    </p>
  </div>


   



  <form action="" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
 <div>
      <label for="First Name" class="sr-only">Email</label>
      <div class="relative">
        <input
          type="firstname"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter First Name"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    
    <div>
      <label for="Last Name" class="sr-only">Email</label>
      <div class="relative">
        <input
          type="lastname"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter Last Name"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>




    <div>
      <label for="email" class="sr-only">Email</label>

      <div class="relative">
        <input
          type="email"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter Email"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
        </span>
      </div>
    </div>

    <div>
      <label for="password" class="sr-only">Password</label>
      <div class="relative">
        <input
          type="password"
          class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
          placeholder="Enter Password"
        />

        <span class="absolute inset-y-0 inline-flex items-center right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </span>
      </div>
    </div>

    

    

    <div class="flex items-center  justify-end">
      {/* <p class="text-sm text-gray-500">
        No account?
        <a class="underline" href="">Sign up</a>
      </p> */}

      <button onClick={() => TestBox()}
    
        type="submit"
        class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
      >
        Sign Up!
      </button>
    </div>
  </form>
</div></div>

        </>
    );
}


function SignupForm()
{
    return(
        <>
        <SignUp />
        </>
    );
}

export default SignupForm;