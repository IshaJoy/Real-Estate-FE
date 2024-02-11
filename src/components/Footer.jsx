import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div style={{ height: '300px' }} className='bg-slate-800 w-100 '>
            <div className="footer-content d-flex justify-content-between container row ">
                <div className="title w-25 col-lg-3 ms-5 mt-5 ">
                    <span className='text-slate-200 fw-bolder text-3xl'>Find</span>
                    <span className='text-slate-400 fw-bolder text-2xl my-1'>.com</span>
                    <div>
                        <span className='text-light'>
                            Designed and build with all the love in the world by the Bootstrap team with the help of our contributors

                        </span><br />
                        <span className='text-light'>Code licensed MIT, docs CC BY 3.0</span><br />
                        <span className='text-light'>Currently v5.3.2</span>
                    </div>
                </div>
                <div className="links d-flex flex-column col-lg-1 ms-5 mt-5">

                    <Link style={{ color: 'white', textDecoration: 'none' }}>SUITES</Link>
                    <Link style={{ color: 'white', textDecoration: 'none' }}>AMENITIES</Link>
                    <Link style={{ color: 'white', textDecoration: 'none' }}>LOCATION</Link>
                    <Link style={{ color: 'white', textDecoration: 'none' }}>CONTACT</Link>
                </div>

                <div className="guides d-flex flex-column col-lg-1">

                </div>
                <div className="contact d-flex flex-column col-lg-2 me-5 mt-5 ">
                    <h3 className='text-light'>Contact Us</h3>
                    <div className='d-flex'>
                        <input type="text" placeholder='Enter your mail' className='form-control' />
                        <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div style={{ color: 'white' }} className="icons mt-3 d-flex justify-content-between">
                        <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i>
                        <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i>
                        <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i>
                        <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i>
                        <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i>
                        <i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i>

                    </div>


                </div>



            </div>
            <p className='text-center text-light mt4'>Copyright &copy;2023 Media Player . Build with React.</p>
        </div>
    )
}

export default Footer