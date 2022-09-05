import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpPage extends Component
{

  constructor(props)
  {
    super(props);

    this.state = {

      email: '',
      username: '',
      password: '',
      hasPremium: '0',

      emailCheck: new Boolean,
      usernameCheck: new Boolean,
      passCheck: new Boolean

    }

    this.textGreen = "text-green-400 text-xs mt-1";
    this.textGray = "text-gray-300 text-xs mt-1";
  }

  // Checks if Required Variables are True, if so Run the Send Login Function
  checkCreds = () => {
    if(this.state.emailCheck && this.state.usernameCheck && this.state.passCheck)
    {
      console.log("Can Proceed");
      this.sendLogin();
    }
    else{
      console.log("Cant Proceed");
    }
  }

  // Check if Email has Valid Domain
  checkEmail = () => {

  }

  // Checks the Passwords Length
  stringIsLength(_string)
  {
    if(_string.length >= 8)
    {
      return true;
    }
    else{
      return false;
    }
  }

  // Checks if Password Contains a Numerical
  stringContainsNum(_string)
  {
    if(/\d/.test(_string))
    {
      return true;
    }else{
      return false;
    }
    
  }

  // Checks if Password Contains a Special Character
  stringContainsSpecial(_string)
  {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
    if(format.test(_string))
    {
      return true;
    }
    else{
      return false;
    } 
  }

  // Check if Password Contains a Captial Letter
  stringContainsCapital(_string)
  {
    for(var i = 0; i < this.state.password.length; i++)
    {
      if(this.state.password[i] == this.state.password[i].toUpperCase())
      {
        return true;
      }
    }
    return false;
  }

  // Check if Both Passwords Match When Typing in Second Password
  checkPasswords = (e) => {
    e.preventDefault();
    if(e.target.value == this.state.password)
    {
      console.log("Passwords Match");
      document.getElementById("passwordscheck").className = this.textGreen;
      this.state.passCheck = true;
    }
    else{
      console.log("Passwords Dont Match");
      document.getElementById("passwordscheck").className = this.textGray;
      this.state.passCheck = false;
    }
  }

  // Update the State Email Vraiable to the Typed Email
  getEmail = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value});
    if(e.target.value.includes("@gmail.com") || e.target.value.includes("@yahoo.com") || e.target.value.includes("@hotmail.com") || e.target.value.includes("@outlook.com"))
    {
      console.log("Valid Email");
      document.getElementById("emailcheck").className = this.textGreen;
      this.state.emailCheck = true;
    }
    else{
      console.log("Please Provide a Valid Email Address");
      document.getElementById("emailcheck").className = this.textGray;
      this.state.emailCheck = false;
    }
  }

  // Update the State Username Variable and Check its length
  getUsername = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
    if(e.target.value.length >= 5)
    {
      document.getElementById("usernamecheck").className = this.textGreen;
    }
    else
    {
      document.getElementById("usernamecheck").className = this.textGray;

    }
  }

  // Check Username in the Database
  async checkUsername() {
    let url_post = 'https://localhost:7257/api/cuser';

    try{
      await axios.post(url_post, {
        username: this.state.username
      })
      .then(function(response) {
        console.log(response.data);
      })

    }catch(e)
    {
      console.log(e);
    }
  }

  // Update the State Password Variable and Check to see if it passes
  getPassword = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value});
    var passlength;
    var passcap;
    var passnum;
    var passspec;
    
    if(this.stringIsLength(e.target.value))
    {
      document.getElementById("passlength").className = this.textGreen;
      passlength = true;
    }
    else{
      document.getElementById("passlength").className = this.textGray;
      passlength = false;
    }

    if(this.stringContainsCapital(e.target.value))
    {
      document.getElementById("passcap").className = this.textGreen;
      passcap = true;
    }
    else{
      document.getElementById("passcap").className = this.textGray;
      passcap = false;
    }

    if(this.stringContainsNum(e.target.value))
    {
      document.getElementById("passnum").className = this.textGreen;
      passnum = true;
    }
    else{
      document.getElementById("passnum").className = this.textGray;
      passnum = false;
    }

    if(this.stringContainsSpecial(e.target.value))
    {
      document.getElementById("passspecial").className = this.textGreen;
      passspec = true;
    }
    else{
      document.getElementById("passspecial").className = this.textGray;
      passspec = false;
    }
    if(passlength && passnum && passcap && passspec)
    {
      this.state.passCheck = true;
    }
  }

  // Send The Registration Information to the Backend
  async sendLogin(){
    let url_post = 'https://localhost:7257/api/sendinfo';
    

    try{
      await axios.post(url_post, {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        hasPremium: this.state.hasPremium
      })
      .then(function(response) {
        console.log(response.data);
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

  <h1 className="text-2xl font-bold text-white sm:text-3xl">Create Your Account!</h1>

  <p className="mt-4 text-gray-500">
    Become a Member Today and Get Access to a Samll Section of Free Components! We Can't Wait to See What You Create With Our Components!
  </p>
</div>

<form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4">
  <div>
    <label className="sr-only">Email</label>

    <div className="relative">
      <input
        onChange={this.getEmail}
        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        placeholder="Email"
        type="email"
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
    <div className=' text-gray-300 text-xs mt-1' id="emailcheck">
      Valid Email Address
    </div>
  </div>

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
      <div className=' text-gray-300 text-xs mt-1' id="usernamecheck">
      Minimum Length 5 Characters
    </div>
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
      <div id="passwordcheck">
      <span id="passlength" className='text-gray-300 text-xs'>Min Length 8 Characters,</span> <span id="passcap" className='text-gray-300 text-xs'>1 Capitalization,</span> <span id="passnum" className='text-gray-300 text-xs'>1 Number</span> <span id="passspecial" className='text-gray-300 text-xs'>& 1 Special Character</span>
    </div>
  </div>
    </div>

  <div>
    <label className="sr-only">Verify Password</label>
    <div className="relative">
      <input
        onChange={this.checkPasswords}
        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        placeholder="Verify Password"
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
    <div className=' text-gray-300 text-xs mt-1' id="passwordscheck">
      Paswords Match
    </div>
  </div>

  <div className=' flex justify-end'>
      <button  className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg" onClick={() => this.checkCreds()}>
          Create Account
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

class BottomTexture extends Component {
  render(){
  return(
    <div class="custom-shape-divider-bottom-1662343745">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
  );
  }
}


function SignUp()
{
    return(
        <>
        <SignUpPage />
        <BottomTexture />
        </>
    );
}

export default SignUp;