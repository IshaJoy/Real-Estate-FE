import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ListingsHome() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-4 '>
          <Link to={'/listing'}>
            <Card style={{ width: '18rem' }}>

              <Card.Img variant="top" src="https://assets.helloaddress.com/propertyImages/2024/January/big_property_P947508_65b886d2171ee.jpg" />
              <Card.Body>
                <Card.Title className='fw-bolder'>Residential Land</Card.Title>
                <Card.Text className='mb-2 fw-bold'>
                <i class="fa-solid fa-location-dot me-3"></i>
                  Thiruvananthapuram town
                </Card.Text>
                <Card.Text className='mb-2'>
                  3.63 Cents of Land with 3 BHK 1500 SQ FT Double Storied Residential House for Sale at Nettayam - Mukkola in Trivandrum.
                </Card.Text>
                <Card.Text className='mb-2 fw-bold'>
                  Price : Rs 1.4 Cr - 1.6 Cr
                </Card.Text>

                <Card.Text>
                  <div className='d-flex fw-bold'>
                  <i class="fa-solid fa-bed me-2 mt-1"></i>
                    <h4 className='me-5'>3 Beds</h4>
                    <i class="fa-solid fa-bath me-2 mt-1"></i>
                    <h4>2 Baths</h4>

                  </div>
                </Card.Text>


              </Card.Body>
            </Card>
            </Link>
            
        </div>

        <div className='col-lg-4 '>
        <Link to={'/listing'}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets.helloaddress.com/propertyImages/2024/January/big_property_P947549_65b9da9840fe4.jpg" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Residential Land</Card.Title>
              <Card.Text className='mb-2 fw-bold'>
              <i class="fa-solid fa-location-dot me-3"></i>
                Thiruvananthapuram town
              </Card.Text>
              <Card.Text className='mb-2'>
                3.63 Cents of Land with 3 BHK 1500 SQ FT Double Storied Residential House for Sale at Nettayam - Mukkola in Trivandrum.
              </Card.Text>
              <Card.Text className='mb-2 fw-bold'>
                Price : Rs 1.4 Cr - 1.6 Cr
              </Card.Text>

              <Card.Text>
                <div className='d-flex fw-bold'>
                <i class="fa-solid fa-bed me-2 mt-1"></i>
                  <h4 className='me-5'>3 Beds</h4>
                  <i class="fa-solid fa-bath  me-2 mt-1"></i>
                  <h4>2 Baths</h4>

                </div>
              </Card.Text>


            </Card.Body>
          </Card>
          </Link>
        </div>

        <div className='col-lg-4 '>
        <Link to={'/listing'}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets.helloaddress.com/propertyImages/2024/January/big_property_P946594_659b8312eaf1c.jpg" />
            <Card.Body>
              <Card.Title className='fw-bolder'>Residential Land</Card.Title>
              <Card.Text className='mb-2 fw-bold'>
              <i class="fa-solid fa-location-dot me-3"></i>
                Thiruvananthapuram town
              </Card.Text>
              <Card.Text className='mb-2'>
                3.63 Cents of Land with 3 BHK 1500 SQ FT Double Storied Residential House for Sale at Nettayam - Mukkola in Trivandrum.
              </Card.Text>
              <Card.Text className='mb-2 fw-bold'>
                Price : Rs 1.4 Cr - 1.6 Cr
              </Card.Text>

              <Card.Text>
                <div className='d-flex fw-bold'>
                <i class="fa-solid fa-bed me-2 mt-1"></i>
                  <h4 className='me-5'>3 Beds</h4>
                  <i class="fa-solid fa-bath  me-2 mt-1"></i>
                  <h4>2 Baths</h4>

                </div>
              </Card.Text>


            </Card.Body>
          </Card>
          </Link>
          
        </div>








      </div>

    </>
  )
}

export default ListingsHome