import React from "react";
import { RxCross2 } from "react-icons/rx";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

export default function Skills() {
  return (
    <FadeIn className="flex flex-col w-screen h-screen bg-color-two text-white relative ">
      <div className="flex flex-col mt-20 ">
        <Link to="/">
          <p className="text-5xl absolute top-6 right-16 font-thin">
            <RxCross2 className="text-purple-400 hover:text-purple-700" />
          </p>
        </Link>
        <h2 className="pt-2 text-[46px] font-extrabold">What i know</h2>
      </div>

      <div className="mx-auto grid grid-cols-5 gap-8 w-5/6 h-1/4 mt-8 s">
        <div className="button-color rounded-lg hover:border-b-2 hover:border-purple-700">
          <h2 className="text-gray-500 text-lg font-semibold text-left pl-10 pt-6">
            Frontend
          </h2>

          <div className="flex flex-col text-left gap-2 py-4 px-6 ">
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-yellow-700">
                  HTML
                </p>
              </div>
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-lime-700">
                  CSS
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin  text-indigo-700">
                  Tailwind CSS
                </p>
              </div>
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-purple-700">
                  Javascript
                </p>
              </div>
            </div>

            <div className="bg-color-two rounded-md inline-block w-2/4">
              <p className="p-2 text-center text-md font-thin text-fuchsia-700">
                React Js
              </p>
            </div>
          </div>
        </div>

        <div className="button-color rounded-lg hover:border-b-2 hover:border-purple-700 ">
          <h2 className="text-gray-500 text-lg font-semibold text-left pl-10 pt-6">
            Backend
          </h2>

          <div className="flex flex-col text-left gap-2 py-4 px-6 ">
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-orange-700">
                  Express Js
                </p>
              </div>
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-green-700">
                  Node Js
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-color rounded-lg hover:border-b-2 hover:border-purple-700 ">
          <h2 className="text-gray-500 text-lg font-semibold text-left pl-10 pt-6">
            Database
          </h2>

          <div className="flex flex-col text-left gap-2 py-4 px-6 ">
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-pink-700">
                  MySQL
                </p>
              </div>
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-yellow-700">
                  MongoDB
                </p>
              </div>
            </div>

            <div className="bg-color-two rounded-md inline-block w-2/4">
              <p className="p-2 text-center text-md font-thin text-violet-700">
                Firebase
              </p>
            </div>
          </div>
        </div>

        <div className="button-color rounded-lg hover:border-b-2 hover:border-purple-700 ">
          <h2 className="text-gray-500 text-lg font-semibold text-left pl-10 pt-6">
            Languages
          </h2>

          <div className="flex flex-col text-left gap-2 py-4 px-6 ">
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-fuchsia-700">
                  C++
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-color rounded-lg hover:border-b-2 hover:border-purple-700 ">
          <h2 className="text-gray-500 text-lg font-semibold text-left pl-10 pt-6">
            CS Fundamentals
          </h2>

          <div className="flex flex-col text-left gap-2 py-4 px-6 ">
            <div className="flex flex-wrap gap-x-3">
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-pink-700">
                  Data Structures
                </p>
              </div>
              <div className="bg-color-two rounded-md inline-block">
                <p className="p-2 text-center text-md font-thin text-violet-700">
                  OOPs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-color flex flex-row mt-24 h-[150px] w-4/6 mx-auto hover:border-b-2 hover:border-purple-700 rounded-md">
        <div className="flex flex-col my-auto mx-6">
          <p className="text-gray-500 text-lg font-semibold text-left">
            Problem Solving and
          </p>
          <p className="text-gray-500 text-lg font-semibold text-left">
            Competative Programming
          </p>
        </div>
        <div className=" w-full flex flex-row m-auto justify-around">
          <div className="flex flex-row">
            <a
              href="https://leetcode.com/Sarthaak02/"
              target="_blank"
              className="flex flex-row gap-x-3 hover:text-purple-400"
            >
              <SiLeetcode />
              <p>Leetcode</p>
            </a>
          </div>

          <div className="flex flex-row">
            <a
              href="https://auth.geeksforgeeks.org/user/sarthak_002/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
              target="_blank"
              className="flex flex-row gap-x-3 hover:text-purple-400"
            >
              <SiGeeksforgeeks />
              <p>Geeksforgeeks</p>
            </a>
          </div>

          <div className="flex flex-row">
            <a
              href="https://www.codechef.com/users/sarthak_002"
              target="_blank"
              className="flex flex-row gap-x-3 hover:text-purple-400"
            >
              <SiCodechef />
              <p>Codechef</p>
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
