import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import dypcoe from '../Assets/dypcoe.jpg'
import ssgm from '../Assets/ssgm.png'
import kjsh from '../Assets/kjsh.png'
import FadeIn from 'react-fade-in';

export default function Education() {
  return (
    <FadeIn className="flex flex-col w-screen h-screen bg-color-two text-white relative ">
      <div className="flex flex-col mt-20 ">
        <Link to="/">
          <p className="text-5xl absolute top-6 right-16 font-thin">
            <RxCross2 className="text-purple-400 hover:text-purple-700" />
          </p>
        </Link>
        <h2 className="pt-2 text-[46px] font-extrabold">Education</h2>
      </div>

      <div className="flex flex-col gap-y-5 mt-8 mx-auto w-3/5">

        <div className="flex flex-row bg-color-one gap-x-5 h-[180px] border-b-2 border-b-purple-700 transform transition-transform hover:scale-105">


          <img src={dypcoe} alt="dypcoe-image" className="w-[350px]" />
          <div className="flex flex-col w-full gap-y-3 my-3">
            <div className="flex flex-row justify-between pt-4 pr-6">
              <h1 className="text-2xl text-left font-semibold">
                Bachelor Of Engineering In Computer Engineering
              </h1>
            </div>
            <p className="text-gray-500 text-lg text-left">
              D Y Patil College of Engineering Akurdi, Pune.
            </p>
            <p className="text-gray-500 text-lg text-left">2020-24 | Pursing | 8.81</p>
          </div>
        </div>

        <div className="flex flex-row bg-color-one gap-x-5 h-[180px] border-b-2 border-b-purple-700 transform transition-transform hover:scale-105">

          <img src={ssgm} alt="ssgm-image" className="w-[350px]" />
          <div className="flex flex-col w-full gap-y-3 my-3">
            <div className="flex flex-row justify-between pt-4 pr-6">
              <h1 className="text-2xl text-left font-semibold">
                HSC Science
              </h1>
            </div>
            <p className="text-gray-500 text-lg text-left">
              SSGM College Kopargaon
            </p>
            <p className="text-gray-500 text-lg text-left">2018-20 | Completed | 87.69%</p>
          </div>
        </div>


        <div className="flex flex-row bg-color-one gap-x-5 h-[180px] border-b-2 border-b-purple-700 transform transition-transform hover:scale-105">


          <img src={kjsh} alt="kjsh-image" className="w-[350px]" />
          <div className="flex flex-col w-full gap-y-3 my-3">
            <div className="flex flex-row justify-between pt-4 pr-6">
              <h1 className="text-2xl text-left font-semibold">
                SSC
              </h1>
            </div>
            <p className="text-gray-500 text-lg text-left">
              K J Somaiya Highschool , Shrirampur
            </p>
            <p className="text-gray-500 text-lg text-left">2018 | Completed | 92%</p>
          </div>
        </div>

      </div>
    </FadeIn>
  );
}
