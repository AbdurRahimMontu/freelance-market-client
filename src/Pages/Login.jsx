import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [show, setShow] = useState(false);
  const refEmail = useRef()
  const {signInUser, setUser, googleSignIn, forgotPass} = use(AuthContext)
   const handleLogInUser=(e)=>{
    e.preventDefault();
  
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginUser = { email,password}
    console.log(loginUser);

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!regex.test(password)){
      toast.warn("password must 6 character and with one upperCase and one lowerCase")
      return;
    }
    
    
    signInUser(email,password)
    .then(result=>{
      toast.success(' Successfully Login ',{position: "bottom-right",
      });
      const user = result.user;
      setUser(user)
      navigate(`${location.state? location.state : "/"}`)
      toast.success("SignIn Successfully")
      e.target.reset()
      console.log(result);
    }).catch(error=>{
      toast.warn(error.message)
      console.log(error);
      toast.warn('not login successful ',{position: "bottom-right",
      });
    })
    
  }

  const handleResetPass=()=>{

   const email = refEmail.current.value;
   forgotPass(email)
   .then(result=>{
    toast("password send email")
    console.log(result);

   }).catch(error=>{
    toast.warn(error.message)
    console.log(error);
   })
  }  

  const handleGoogleSignIn=()=>{
      googleSignIn()
      .then(result=>{
         navigate(`${location.state? location.state : "/"}`)
          toast.success("SignIn Successfully")
        console.log(result);
      }).catch(error=>{
          toast.warn(error.message)
        console.log(error);
      })
    }
    return (
        <div className="hero bg-base-200 py-5">
       <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
         <div className="card-body">
             <h1 className="text-3xl font-bold text-center">Login now!</h1>
           <form onSubmit={handleLogInUser} className="fieldset">
           <div className=''>
               <input type="email" ref={refEmail} className="input w-full" placeholder="Enter Your Email" name='email' />
           </div>

           <div className='relative'>
               <input type={show? "text": "password"} className="input w-full" placeholder="Enter Your Password" name='password' />
               <span onClick={()=>setShow(!show)} className='absolute z-10 cursor-pointer right-3 top-2'>{show?<FaEye size={20}/>:<FaEyeSlash size={20}/>}</span>
           </div>
   
      
             <button onClick={handleResetPass} type='button' className='text-start cursor-pointer'>Forgot Password</button>
             <button className="btn bg-purple-700 text-white mt-4">Login</button>
             <p>Do Not Have Account ? please <Link to="/register" className='text-purple-700 border-b-2 font-semibold'>Register</Link>  </p>
             <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
     <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
     Login with Google
             </button>
           </form>
         </div>
       </div>
   
   
   </div>
    );
};

export default Login;