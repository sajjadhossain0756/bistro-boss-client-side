import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../Components/SectionTitle'
import { FaQuoteLeft } from "react-icons/fa";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Testemonial = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Testemonials'}
            />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {review && review.map(review => <SwiperSlide
                    key={review._id}
                >
                    <div className='mx-36 mb-20 mt-10 flex gap-2 flex-col justify-center items-center text-center'>
                        <FaQuoteLeft className='text-5xl mb-6' />
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p>{review.details}</p>
                        <p className="text-2xl text-orange-400 font-semibold">{review.name}</p>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    )
}

export default Testemonial