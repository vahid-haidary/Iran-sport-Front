import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function SlideElemet({children}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='max-h-[570px] w-full'  src="../../public/images/slide.jfif" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-h-[570px] w-full filter grayscale contrast-200' src="../../public/images/slide.jfif" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-h-[570px] w-full filter invert'  src="../../public/images/slide.jfif" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-h-[570px] w-full filter sepia' src="../../public/images/slide.jfif" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
