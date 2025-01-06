// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <div className='mb-10'>
            <SectionTitle
            subHeading={"From 11:00am To 10:00pm"}
             heading={"Order Online"}
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Pastry</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='pl-8 text-white/80 text-4xl uppercase font-semibold -mt-20 pb-10'>Salads</h2>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Category