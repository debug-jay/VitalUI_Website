import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpPage extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {

      username: '',
      password: '',
      canAccess: Boolean

    }
  }

  getUsername = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  getPassword = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  async Login(){
    // everything contaning post request
    let url_post = 'https://localhost:7257/api/checkinfo';
    try{
      await axios.post(url_post, {
        username: this.state.username,
        password: this.state.password
      })
      .then(function(response) {
        console.log(response.data);
        if(response.data == "true")
        {
          console.log("Do Something Else");
          this.state.canAccess = true;
        }
        
      })

    }catch(e)
    {
      console.log(e);
    }
  }

  render(){
    return(
      <>
<div className='flex h-screen'>
<span className="font-semibold text-white text-2xl tracking-wider absolute left-4 sm:left-28 m-4"><Link to="/">VitalUI</Link></span>
<div className=" px-4 py-16 mx-auto sm:px-6 lg:px-8">

<div className="max-w-lg mx-auto text-center mt-36">

  <h1 className="text-2xl font-bold text-white sm:text-3xl">Login To Your Account</h1>

  <p className="mt-4 text-gray-500">
    Become a Member Today and Get Access to a Samll Section of Free Components! We Can't Wait to See What You Create With Our Components!
  </p>
</div>

<form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">

  <label className="sr-only">UserName</label>

    <div className="relative">
      <input
        onChange={this.getUsername}
        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        placeholder="Username"
        type="username"
        required={true}
      />

      <span className="absolute inset-y-0 inline-flex items-center right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      </span>
    </div>

  <div>
    <label className="sr-only">Password</label>
    <div className="relative">
      <input
        onChange={this.getPassword}
        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        placeholder="Password"
        type="password"
        required={true}
      />

      <span className="absolute inset-y-0 inline-flex items-center right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </span>
    </div>
  </div>

  <div className=' flex justify-end'>
      <button  className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg" onClick={() => this.Login()}>
          Login
      </button>
  </div>


    <div className="relative hidden">
      <input
      required={true}
      />

    </div>

</form>
</div></div>

      </>
  );
  }
    
}


function SignUp()
{
    return(
        <>
        <SignUpPage />
        </>
    );
}

export default SignUp;