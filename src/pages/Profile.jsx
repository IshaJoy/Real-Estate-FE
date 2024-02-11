import React from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';


function Profile() {
  return (
   
    <div className="container d-flex justify-content-center align-items-center  " style={{height:'100vh'}}>
      <div className="text-center">
        <h1 className='fw-bold  text-2xl'>Profile</h1>
        <label style={{width:'200px'}}  >
                <input type="file" style={{ display: 'none'}}   />
                <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
              </label>
        <div>
          <img src="" alt="" className="rounded-circle" />
        </div>
        <Form className="mb-3 w-100 " >
          <Form.Group className="mb-3 " style={{width:'400px'}} controlId="formBasicName">
            <Form.Control type="email" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group className="mb-3 " style={{width:'400px'}} controlId="formBasicName">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 " style={{width:'400px'}} controlId="formBasicName">
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>


        </Form>
        <div className='flex justify-between'>
        <button
          
          className='bg-slate-700 text-white rounded-lg p-2  uppercase hover:opacity-95 disabled:opacity-80'
        >
          Update
        </button>
        <Link to={'/createlisting'}
          className='bg-green-700 text-white p-2 rounded-lg  uppercase text-center hover:opacity-95'
         
        >
          Create Listing
        </Link>
        </div>
        <div className='flex justify-between mt-5'>
        <span
          
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
      <button className='text-green-700 w-full'>
        Show Listings
      </button>
      </div>
    </div>
    
  );
};



export default Profile