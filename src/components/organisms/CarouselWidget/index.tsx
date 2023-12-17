import { useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useId, useState } from "react";
 
import slide1 from "/public/Images/cat1.png";
import slide2 from "/public/Images/cat2.png";
import slide3 from "/public/Images/cat3.png";
import slide4 from "/public/Images/cat1.png";
import slide5 from "/public/Images/cat2.png";
 
const CarouselWidget = () => {
  const items = [slide1, slide2, slide3, slide4, slide5,];
  const id = useId().replaceAll(":", "");
  const [ready, setReady] = useState(false);

  //レンダ確認
  useEffect(() => {
    console.log(`CarouselWidget compo fresh render`);
  }); //依存配列なしの場合 render毎実行
 
  // cn関数の代わりにclassNames関数を使用する（一般的なライブラリ）
  const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ');

  return (
    <>
      <div className="w-full py-6">
        {/* 以前のcn関数をclassNames関数に置き換え */}
        <Swiper
          onInit={() => setReady(true)}
          modules={[Autoplay, Pagination, Navigation, A11y, Keyboard]}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: `#swiper-pagination-${id}`,
            renderBullet(i, className) {
              return `<button class="${className} aria-[current]:bg-primary w-2 h-2 bg-zinc-400/50 inline-block rounded-full"><span class="sr-only">Slide to ${i}</span></button>`;
            },
          }}
          slidesPerView={1.5}
          autoplay={{
            pauseOnMouseEnter: true,
          }}
          loop
          centeredSlides={true}
          className={classNames("relative", !ready && "opacity-0")}
        >
          {items.map((image, i) => (
            <SwiperSlide
              key={`slide-${i}`}
              className="relative shadow aspect-video overflow-hidden border rounded-lg"
            >
              <Image
                className="object-cover"
                fill
                src={image}
                sizes="265px"
                key={`slide-${i + 1}`}
                alt=""
              />
            </SwiperSlide>
          ))}

          <button
            id="swiper-button-prev"
            className="absolute z-10 w-10 h-10 grid place-content-center top-1/2 left-0 -translate-y-1/2"
          >
            <ChevronLeft size={32} />
            <span className="sr-only">Prev</span>
          </button>
          <button
            id="swiper-button-next"
            className="absolute z-10 w-10 h-10 grid place-content-center top-1/2 right-0 -translate-y-1/2"
          >
            <ChevronRight size={32} />
            <span className="sr-only">Next</span>
          </button>
        </Swiper>
        <div id={`swiper-pagination-${id}`} className="swiper-pagination mt-4 flex items-center gap-2 justify-center"/>

        <div className="text-center">
          <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg m-4">
            Seeking Foster Parents for This Cat
          </a>
        </div>

      </div>
    </>
  );
};

export default CarouselWidget;
