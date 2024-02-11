// import { useState } from 'react';
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';
// import { app } from '../firebase';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


export default function CreateListing() {
  
  return (
    <div className="bg-slate-200" style={{height:'100vh'}}>
      {/* <img src="https://cdn2.ramseysolutions.net/dynamic/media/blog/home-selling/home-selling-basics/how-to-sell-a-house.jpg/640w.jpg" alt="" /> */}
    <main className='p-3 max-w-5xl  mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Create a Listing
      </h1>
      <div className='flex flex-col sm:flex-row gap-20'>
        <div className='flex flex-col gap-8 flex-1'>
          <input
            type='text'
            placeholder='Title'
            className='border p-3 bg-slate-300 fw-bold rounded-lg'
            id='name'
            maxLength='80'
            minLength='5'
            required
            // onChange={handleChange}
            // value={formData.name}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='border p-3 rounded-lg bg-slate-300 fw-bold'
            id='description'
            required
            // onChange={handleChange}
            // value={formData.description}
          />
          <input
            type='text'
            placeholder='Address'
            className='border p-3 rounded-lg bg-slate-300 fw-bold'
            id='address'
            required
            // onChange={handleChange}
            // value={formData.address}
          />
          
          <div className='flex flex-wrap gap-6'>
            <div className='flex items-center gap-3'>
              <input
                type='number'
                id='bedrooms'
                min='1'
                max='10'
                placeholder="count"
                required
                className='p-3 border border-gray-300 rounded-lg bg-slate-300 '
                // onChange={handleChange}
                // value={formData.bedrooms}
              />
              <p>Beds</p>
            </div>
            <div className='flex items-center gap-3'>
              <input
                type='number'
                id='bathrooms'
                min='1'
                max='10'
                required
                placeholder="count"
                className='p-3 border border-gray-300 rounded-lg bg-slate-300 '
                // onChange={handleChange}
                // value={formData.bathrooms}
              />
              <p>Baths</p>
            </div>

            <div className='flex gap-6 flex-wrap'>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='sale'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.type === 'sale'}
              />
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='rent'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.type === 'rent'}
              />
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='parking'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.parking}
              />
              <span>Parking spot</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='furnished'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.furnished}
              />
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input
                type='checkbox'
                id='offer'
                className='w-5'
                // onChange={handleChange}
                // checked={formData.offer}
              />
              <span>Offer</span>
            </div>
          </div>

            
            
          </div>
        </div>
        <div className='flex flex-col flex-1 gap-4'>
        <div className='flex items-center gap-2 '>
              <input
                type='number'
                id='regularPrice'
                placeholder="k / month"
                min='10'
                max='10000000'
                required
                className='p-3 border border-gray-300 rounded-lg bg-slate-300'
                // onChange={handleChange}
                // value={formData.regularPrice}
              />
              <div className='flex flex-col items-center'>
                <p>Regular price</p>
               
                  <span className='text-xs'>(k / month)</span>
                
              </div>
            </div>
            
              <div className='flex items-center gap-2'>
                <input
                  type='number'
                  id='discountPrice'
                  placeholder="k / month"
                  min='0'
                  max='10000000'
                  required
                  className='p-3 border border-gray-300 rounded-lg bg-slate-300'
                //   onChange={handleChange}
                //   value={formData.discountPrice}
                />
                <div className='flex flex-col items-center'>
                  <p>Discounted price</p>

                 
                    <span className='text-xs'>(k / month)</span>
                  
                </div>
              </div>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className='flex gap-4'>
            <input
            //   onChange={(e) => setFiles(e.target.files)}
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
            <button
              type='button'
            //   disabled={uploading}
            //   onClick={handleImageSubmit}
              className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80 bg-slate-300'
            >
                UPLOAD
              {/* {uploading ? 'Uploading...' : 'Upload'} */}
            </button>
          </div>
          <p className='text-red-700 text-sm'>
            {/* {imageUploadError && imageUploadError} */}
          </p>
          
              {/* <div
                // key={url}
                className='flex justify-between p-3 border items-center'
              >
                <img
                  src=""
                  alt='listing image'
                  className='w-20 h-20 object-contain rounded-lg'
                />
                <button
                  type='button'
                //   onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
              </div>
             */}
          <button
            // disabled={loading || uploading}
            className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            CREATE LISTING
            {/* {loading ? 'Creating...' : 'Create listing'} */}
          </button>
          <p className='text-red-700 text-sm'></p>
        </div>
      </div>
    </main>
    </div>
  );
}