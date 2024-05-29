"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";
import web from "../../../public/images/about/about-image-2.svg"
import svg from "../images/shape-01.svg"
import { ProductCard } from "./product";
import svg2 from "../../../public/images/hero/shape-021.svg"

const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-w-screen min-h-screen flex justify-center items-center mt-0">
    <div className="container lg:grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 flex justify-center items-center">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          {/* <div className="flex justify-center">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 bg-orange-600">New</span> <span className="text-sm font-medium">Flowbite is out! See whats new</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a></div> */}
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-[5rem] text-[#d26638] dark:text-white text-center">Divya Enterprise</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <div className="flex justify-center">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
            </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image width={1000} height={1000} src={web} alt="mockup" />
        </div>                
    </div>
</section>
      <ProductCard />
    </>
  );
};

export default Hero;
