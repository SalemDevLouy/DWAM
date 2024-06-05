"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Lesson = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {levels.map((item, index) => (
          <div key={item.level} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left
                   text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring
                    focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.level}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  {item.sesmester.map((sesmester, index) => (
          <div key={sesmester.no} className=" mb-4 ">
            <div className='border-b-indigo-500 border-b-2  p-5 flex flex-col gap-4'>
              <span className="text-indigo-500 font-bold underline">Season : {sesmester.no}</span>
              <p>
              {sesmester.desc} 
              </p>
              <a href={sesmester.link}>
                <span className="text-indigo-500 font-bold p-2 bg-gray-100 rounded-xl">Go to drive</span>
              </a>
              
              
              </div>
              
          </div>
            ))
            }
                    
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const levels = [
  {
    level: "01 Licence",
    sesmester:[
      {
      no:'01',
      desc:"On this season you will learn the basics and general information about the web like :Algorithme , Networks ,How internet work ... etc",
      link:"/"
      },
      {
      no:'02',
      desc:"This season you will learn front-end web development techniques with html css & js and wou will learn relation databases ",
      link:"/"
      }
  ] 
  },
  {
    level: "02 Licence",
    sesmester:[
      {
      no:'03',
      desc:"This season you will learn back-end development with php and UML diagrams",
      link:"/"
      },
      {
      no:'04',
      desc:"This season you will learn mobile applications with Java and asp.net framwork ",
      link:"/"
      }
  ] 
  },
  {
    level: "03 Licence",
    sesmester:[
      {
      no:'05',
      desc:"This season you will learn CMS and IOS application development ",
      link:"/"
      },
      {
      no:' 06',
      desc:"Only graduation Project",
      link:"/"
      }
  ] 
  },
];
