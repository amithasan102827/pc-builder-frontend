/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
    return (
        <section className='mx-4  bg-white pb-5 shadow-sm'>
            <h4 className='text-center py-3'>Shop By Category</h4>

            <div className="row align-items-center justify-content-center g-4">
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/CPU`}>

                        <Image
                            className=' d-block  rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-228x228.jpg"
                            alt="Description of the image"
                            width={100}
                            height={100}
                        />
                        <h6 className='text-center mt-2'>CPU</h6>
                    </Link>
                </div>
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/Motherboard`}>

                        <Image
                            className=' d-block  rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/motherboard/msi/b450m-a-pro-max-ii/b450m-a-pro-max-ii-01-228x228.webp"
                            alt="Description of the image"
                            width={100}
                            height={100}
                        />
                        <h6 className='text-center mt-2'>MOTHERBOARD</h6>
                    </Link>
                </div>
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/RAM`}>
                        <Image
                            className='d-block rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/RAM/TwinMOS/TwinMOS%204GB%20DDR4%202400-228x228.jpg"
                            alt="Description of the image"
                            width={100}
                            height={100}
                        />
                        <h6 className='text-center mt-2'>RAM</h6>
                    </Link>
                </div>
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/Storage`}>
                        
                        <Image
                            className='d-block rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/ssd/gigabyte/120gb/120gb-ssd-228x228.jpg"
                            alt="Description of the image"
                            width={100}
                            height={100}
                        />
                        <h6 className='text-center mt-2'>STORAGE</h6>
                    </Link>
                </div>
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/Power Supply`}>
                    
                        <Image
                            className='d-block rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/power-supply/gamdias/aura-gp550/aura-gp550-01-228x228.webp"
                            alt="Description of the image"
                            width={100}
                            height={100}
                        />
                        <h6 className='text-center mt-2'>POWER SUPPLY</h6>
                    </Link>
                </div>
                <div className="col-md-3 ">
                    <Link className='text-decoration-none text-dark' href={`/category/Monitor`}>
                        
                        <Image
                            className='d-block rounded mx-auto'
                            src="https://www.startech.com.bd/image/cache/catalog/monitor/hp-monitor/m24fwa/m24fwa-01-228x228.webp"
                            width={100}
                            height={100}
                            alt='image description'
                        />
                        <h6 className='text-center mt-2'>MONITOR</h6>
                    </Link>
                </div>
            </div>
        </section>

    )
}


// export async function getServerSideProps() {
//     const categories = [
//         { _id: '1', name: 'MOTHERBOARD', slug: 'motherboard' },
//         { _id: '2', name: 'CPU', slug: 'cpu' },
//     ];

//     return {
//         props: {
//             categories
//         }
//     };
// }



export default CategoryPage