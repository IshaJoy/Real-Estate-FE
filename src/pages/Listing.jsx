import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Listing() {
    return (
        <>
            <Carousel data-bs-theme="light" >
                <Carousel.Item >
                    <img style={{ height: '350px' }}
                        className="d-block w-100 "
                        src="https://i0.wp.com/prohomedecors.com/wp-content/uploads/2021/05/Modern-One-Story-House-Plot-20x17-meter-with-2-Bedrooms-3d-view.jpg?resize=980%2C557&ssl=1"
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item >
                    <img style={{ height: '350px' }}
                        className="d-block w-100 "
                        src="https://www.houseplansdaily.com/uploads/images/202309/image_750x_650f010f84083.jpg"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

            {/* <div className=''>
                
                <h1>Residential Land</h1>
                <h3>Thiruvananthapuram Town</h3>
                <h3>3.63 Cents of Land with 3 BHK 1500 SQ FT Double Storied Residential House for Sale at Nettayam - Mukkola in Trivandrum. </h3>
                <div className='d-flex'>
                    <button>For Sale</button>
                </div>
            </div> */}


          <Card className='align-items-center border border-light' >
            
            <Card.Body>
              <Card.Title className='fw-bolder text-3xl'>Residential Land</Card.Title>
              <Card.Text className='mb-2 font-semibold text-xl '>
              <i class="fa-solid fa-location-dot me-3"></i>
                Thiruvananthapuram town
              </Card.Text>
              <Card.Text className='mb-2'>
              <span className='fw-bold'>Description : </span> 3.63 Cents of Land with 3 BHK 1500 SQ FT Double Storied Residential House for Sale at Nettayam - Mukkola in Trivandrum. 
              </Card.Text>
<Card.Text className='mb-2 fw-bold'>
              Price : Rs 1.4 Cr - 1.6 Cr
              </Card.Text>

              <Card.Text>
                {/* <div className='d-flex fw-bold'>
                  <h4 className='me-5'>3 Beds</h4>
                  <h4>2 Baths</h4>
                  
                   </div> */}
    
              </Card.Text>

              <ul className='text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6'>
              <li className='flex items-center gap-1 whitespace-nowrap '>
              <i class="fa-solid fa-bed"></i>
                3 Beds
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
                {/* <FaBath className='text-lg' /> */}
                <i class="fa-solid fa-bath"></i>
                2 Baths
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
              <i class="fa-solid fa-square-parking"></i>
              Parking
              </li>
              <li className='flex items-center gap-1 whitespace-nowrap '>
              <i class="fa-solid fa-chair"></i>
                Not Furnished
              </li>
            </ul>

              <div className='flex'>
                    <button className='bg-danger p-2 w-25 mt-3 rounded  fw-bold me-5' >For Sale</button>
                    <button className=' p-2 w-25 text-light mt-3 rounded bg-slate-600  fw-bold ' >CONTACT OWNER</button>
                </div>

              
            </Card.Body>
          </Card>  


        </>
    )
}

export default Listing