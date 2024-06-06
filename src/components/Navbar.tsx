"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure ,DisclosureButton,DisclosurePanel } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    {
      nav:"Go to Google drive",
      link:"https://drive.google.com/drive/folders/1aywXpUXIaBCxYRNPinzlQglaqyzvrn-I?fbclid=IwZXh0bgNhZW0CMTAAAR0DDqdkF0d1JudkQUKIHMoSL8CUDKmbkHIYv4AhwxKocAlDISPmG6AmZxE_aem_AfgsS0BRSlTJjgjWCdQjqXNblg3sgl5Ur1iOfWbbUKy5uyZ8od_J3h9hDFOeUOURUG1tPYU_1f4VXlDhCtBUdXNv"
    }
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between ">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="Logo"
                        width="32"
                        height="32"
                        className="w-8 text-indigo-500"
                      />
                    </span>
                    <span>DWAM</span>
                  </span>
                </Link>
                <DisclosureButton
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </DisclosureButton>
          
                <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={`${item.link}`} target="_blank" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.nav}
                      </Link>
                    ))}
                    <Link href="https://github.com/simo0loufi/DWAM.git" target="_blank" className=" py-2 text-indigo-600 rounded-md ">
          <span className="flex items-center space-x-2 text-md font-medium dark:text-gray-100">
                    
                    <span>Go to repo</span>
                  </span>
          </Link>
                  </>
                </DisclosurePanel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.link} target="_blank" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500  focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800 transition-all duration-500 dark:hover:text-indigo-500">
                    {menu.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="https://github.com/simo0loufi/DWAM.git" target="_blank" className="px-2 py-2 text-white bg-indigo-600 rounded-md ">
          <span className="flex items-center space-x-2 text-md font-medium dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/github.svg"
                        alt="github-icon"
                        width="25"
                        height="25"
                        className="w-8 text-indigo-500"
                      />
                    </span>
                    <span>Go to repo</span>
                  </span>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

