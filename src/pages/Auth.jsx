import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import OAuth from '../components/OAuth'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Spinner from 'react-bootstrap/Spinner';





function Auth({ insideRegister }) {
  const [loginStatus,setLoginStatus] = useState(false)
  const navigate = useNavigate()
  const [userData,setUserData]= useState({
    username:"",email:"",password:""
  })

  const handleRegister = async(e)=>{
    e.preventDefault()
    console.log(userData);
    const {username,email,password} = userData
    if (!username || !email || !password) {
      toast.info("Please fill the form completely")
    }else{
      // toast.success("ProceeD to api call")
    //   try{
    //     const result = await registerAPI(userData)
    //     console.log(result);
    //     if (result.status==200) {
    //       toast.success(`${result.data.username} has registered successfully`)
    //       setUserData({username:"",email:"",password:""})
    //       setTimeout(()=>{
    //         navigate('/login')
    //       },3000)
    //     }else{
    //       toast.warning(result.response.data)
    //     }

    //   }catch(err){
    //     console.log(err);
    //   }
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(userData);
    const { email, password } = userData
    // if (!email || !password) {
    //   toast.info("please fill the form completely!!!!")
    // }
    // else {
    //   try {
    //     const result = await loginAPI({ email, password })
    //     console.log(result);
    //     if (result.status === 200) {
    //       setLoginStatus(true)
    //       sessionStorage.setItem("username", result.data.existingUser.username)
    //       sessionStorage.setItem("token", result.data.token)
    //       setTimeout(()=>{
    //       setUserData({ email: "", password: "" })

    //       navigate('/')
    //       setLoginStatus(false)
    //     },2000)

    //     }
    //     else {
    //       toast.warning(result.response.data)
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }


  console.log(userData);
  return (
    <div style={{ width: '100%', height: '100vh' }} className='  justify-content-center align-items-center  mt-3'>
      <div className='container' style={{width:'500px'}}>
        <Link to={'/'}>Back to home</Link>
        <div className='card shadow p-5 bg-teal-900    hover:opacity-95 disabled:opacity-80' >
          <div className=" align-items-center" >
            <div className="">
              <img className='w-75 ms-5' src="https://animationexplainers.com/wp-content/uploads/2021/07/p5-bg1.png" alt="" />
            </div>
            <div className="">
              <div className='d-flex align-items-center flex-column'>
                
                <h5 className='fw-bolder mt-2 pb-3 text-light'>
                  {insideRegister ? 'Sign up to your account' : 'Sign in to your account'}
                </h5>

                <Form className='w-100'>
                  {
                    insideRegister && (<Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="email" placeholder="Enter Username" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                  </Form.Group>
                  {
                    insideRegister?
                    <div>
                      <button onClick={handleRegister} className='btn btn-success mb-2'>Sign Up</button>
                      <OAuth/>
                      <p className='text-light' >Already have an account? Click here to <Link className='text-danger' to={'/sign-in'}>Sign In</Link></p>
                    </div>:
                    <div>
                    <button onClick={handleLogin} className='btn btn-success mb-2'>Sign In {loginStatus && <Spinner className='ms-1' animation="border"  />}</button>
                    <OAuth/>
                    
                    <p className='text-light' >New User? Click here to <Link className='text-danger' to={'/sign-up'}>Register</Link></p>
                    </div>

                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Auth