import React from 'react'
import coverImg from '../assets/Images/cover_img.png'


function About() {
  return (
    <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', marginTop:'140px' }}>
    <img className="cover-image w-100" src="https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1707264000&semt=ais" alt="" style={{ width: '100%', height: 'auto' }} />
    <div className="content w-50  " style={{ position: 'absolute', textAlign: 'center', fontFamily:'Protest ',marginBottom:'200px',fontSize:'20px'}} >
      <p className='text-light p-3 '>Find.com is committed to ensuring the security and privacy of its users throughout the property search and transaction process. The platform employs robust encryption protocols and secure payment gateways to safeguard sensitive information and facilitate seamless and secure transactions.</p>
      <p className='text-light p-3 '>In addition to its user-centric approach, Find.com places a strong emphasis on customer support, offering dedicated channels for assistance and guidance. Whether users have inquiries about listings, need assistance with the search process, or require support during transactions, Find.com's customer support team is readily available to provide prompt and personalized assistance.</p>
      <p className='text-light p-3 '>Overall, Find.com is not just a real estate platform—it's a trusted partner for individuals, families, and businesses seeking their dream properties. With its commitment to innovation, transparency, and customer satisfaction, Find.com continues to redefine the real estate experience and empower users to find their perfect place to call home.</p>
    </div>
  </div>
  
  




  )
}

export default About
