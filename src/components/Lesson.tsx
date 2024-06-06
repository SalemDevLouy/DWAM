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
            <div className='border-b-indigo-500 border-b-2  p-5 flex flex-col gap-4 rounded-md bg-indigo-200'>
              <span className="text-indigo-500 font-bold underline">Season : {sesmester.no}</span>
              <p className="text-gray-600">
              {sesmester.desc} 
              </p>
              <a href={sesmester.link} target="_blank">
                <span className="text-indigo-500 font-bold p-2 bg-gray-200 rounded-xl hover:bg-indigo-500
                 hover:text-gray-100 transition-all duration-500">Go to drive</span>
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
      link:"https://drive.google.com/drive/folders/11bXwh_nANo-I-M6jrksYVDmmNHa_mtm5?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      },
      {
      no:'02',
      desc:"This season you will learn front-end web development techniques with html css & js and wou will learn relation databases ",
      link:"https://drive.google.com/drive/folders/1UpDy7k_fKbk3NKFJYoLYbhWNcKwSYXNH?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      }
  ] 
  },
  {
    level: "02 Licence",
    sesmester:[
      {
      no:'03',
      desc:"This season you will learn back-end development with php and UML diagrams",
      link:"https://drive.google.com/drive/folders/12dD6OFl5dnnzyRHQ15fHN-HjItjKg3Ji?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      },
      {
      no:'04',
      desc:"This season you will learn mobile applications with Java and asp.net framwork ",
      link:"https://drive.google.com/drive/folders/1EuMI55MG6o6LSCSUsYWrAIV1DLTRbxel?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      }
  ] 
  },
  {
    level: "03 Licence",
    sesmester:[
      {
      no:'05',
      desc:"This season you will learn CMS and IOS application development ",
      link:"https://drive.google.com/drive/folders/1Iu0bnm6p50vzVh9DN-RfNngTOxBrOEPd?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      },
      {
      no:' 06',
      desc:"Only graduation Project",
      link:"https://drive.google.com/drive/folders/1Te5IGZCq1EdlZy5yzONbGYCuEw-EDkvg?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      }
  ] 
  },
  {
    level: "Intership",
    sesmester:[
      {
      no:'intership',
      desc:"Here is same file you will need it",
      link:"https://drive.google.com/drive/folders/1e65_R6q0PBzTlFLxuZvAb48uCIJE1bzJ?fbclid=IwZXh0bgNhZW0CMTAAAR31VTmRZ7dtUsQU-pwSxFcM1Vwa3FNOoa1qndLYNyvN0wxSNLhXxAr5j1E_aem_AREX99JseUyk4oUxq_MPMhINO4hcNDVQL5XBa9XJQS3jtPJrVms-pXCrUkqwRv_C20PJPbfHmzWZ0xeDjGPy4ete"
      }
  ] 
  },
];
