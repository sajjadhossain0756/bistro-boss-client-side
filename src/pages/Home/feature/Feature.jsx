import React from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import featuredImg from '../../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <div className='bg-image bg-fixed py-10 text-gray-200'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Feature Item"}
            />
            <div className='pb-10'>
                <div className='flex gap-5 w-9/12 mx-auto'>
                    <figure className='flex-1'>
                        <img className='w-[430px]' src={featuredImg} alt="" />
                    </figure>
                    <div className='flex-1 space-y-2 text-gray-200'>
                        <p>Aug 20, 2024</p>
                        <p className='uppercase'>Where Can I get Some</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates
                            deleniti dicta aspernatur, repellendus soluta inventore quidem
                            dolorem dolor facere rem iure id error sapiente. Aspernatur
                            voluptate impedit illo! Reiciendis. Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Eum, id?</p>
                        <button className='uppercase btn btn-outline border-0 text-gray-200 border-orange-400 border-b-4'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature