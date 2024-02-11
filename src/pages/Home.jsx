import React,{useEffect} from 'react'

import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import ListingsHome from '../components/ListingsHome';
import coverImg from '../assets/Images/cover_img.png'
import Footer from '../components/Footer'

// import { Swiper, SwiperSlide } from 'swiper/react';


// import ListingItem from '../components/ListingItem';

function Home() {
 
  return (
    <>
      <div className=''>

        {/* <div className='flex bg-gradient-to-r from-neutral-200 to-neutral-100 '>

          <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
            <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl' style={{ fontFamily: '' }}>
              Find <span className='text-slate-500'>comfort</span>, find <span className='text-slate-500'>style</span>, find <span className='text-slate-500'>home.</span>
              <br />
              Your perfect rental awaits
            </h1>
            <div className='text-gray-400 text-xs sm:text-sm'>
              Streamline your search, find your dream home effortlessly with us.
              <br />
              We have a wide range of properties for you to choose from.
            </div>
            <Link
              to={'/search'}
              className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
            >
              Let's get started...
            </Link>


          </div>

          <div className=''>
            <img className='mt-18 mr-14 ' src={coverImg} alt="" />
          </div>

        </div> */}

        <div className="App">

          <div
            className="cover-container  hover:opacity-95 "
            style={{
              position: 'relative',
              height: '700px', // Adjust height as needed
            }}
          >
            <img
              src="https://cdn.vox-cdn.com/thumbor/YBt5k0IkVzRjVanY76ZJM-3dpTQ=/0x73:1023x609/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16344350/0b0cd00c_891f_49a5_a75c_cdd640a23020.f10.jpg"
              alt="Cover"
              className="cover-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              className="cover-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
              }}
            ></div>
            <div 
              className="cover-content "
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                zIndex: 1,
              }}
            >
              <h1  className='text-slate-100 font-bold text-3xl lg:text-7xl ' style={{ fontFamily: 'IBM Plex Serif' }}>
                Find <span className='text-amber-100'>comfort</span>, Find <span className='text-amber-100'>style</span>, Find <span className='text-amber-100'>home.</span>
                <br />

              </h1>
              <div className='text-xl mt-3 fw-bold text-slate-100' >
                <h1>
                  Your perfect rental awaits
                </h1>
              </div>

              <div className='text-gray-300 text-xs sm:text-sm'>
                Streamline your search, find your dream home effortlessly with us.
                <br />
                We have a wide range of properties for you to choose from.
              </div>
              <Link
                to={'/search'}
                className='text-xs sm:text-sm text-amber-200 font-bold hover:underline'
              >
                Let's get started...
              </Link>

            </div>
          </div>
        </div>



        {/* need to consider this code */}

        {/* Carousel */}
        {/* <Carousel data-bs-theme="light"  >
          <Carousel.Item >
            <img
              className="d-block w-100 h-25"
              src="https://i0.wp.com/prohomedecors.com/wp-content/uploads/2021/05/Modern-One-Story-House-Plot-20x17-meter-with-2-Bedrooms-3d-view.jpg?resize=980%2C557&ssl=1"
              alt="First slide"
            />

          </Carousel.Item>

          <Carousel.Item >
            <img
              className="d-block w-100 h-25"
              src="https://www.houseplansdaily.com/uploads/images/202309/image_750x_650f010f84083.jpg"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel> */}

        {/* swiper */}
        {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

        {/* listing results for offer, sale and rent */}

        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>

          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <ListingsHome />

          </div>


          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <ListingsHome />

          </div>


          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <ListingsHome />

          </div>
        </div>
<div className='d-flex row container ' style={{ width:'100%',marginLeft:'12px' }} >
          <img className='mt-10 col-lg-3  ms-5' src={coverImg} alt="" />
          <div className='col-lg-1 '></div>
          <p className='col-lg-3  ms-5 text-center text-slate-900 mt-24 w-50  ' style={{ fontFamily: 'italics',fontSize:'18px' }}>At the heart of Find.com is its commitment to empowering users with the tools and information they need to make informed decisions about their property investments. The platform boasts an extensive range of property listings, including residential, commercial, and rental properties, catering to the diverse needs of individuals, families, and businesses.</p>
        </div>
        

      </div>


      <Footer />


    </>
  )
}

export default Home