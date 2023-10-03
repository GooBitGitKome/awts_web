'use client'
import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import logoImage from "../../pic/AWTS_logo.png"
// import { slide as Menu_item } from 'react-burger-menu'
// import { Menu, MenuButton} from '@chakra-ui/react';
// import { Button } from "@nextui-org/button";

export default function Burger() {
    /*const showSettings = (event: any) => {
        event.preventDefault();
      }; */
      let menuHtml = "z-40 bg-blue-100  md:w-1/4 w-1/3  h-screen top-0 right-0 bottom-0 fixed h-screen flex flex-col";

      const hamburger = ()=>{ 
      }


      const [isOpen, setOpen] = useState<boolean>(false)
      const handleMenuOpen = () => {
        setOpen(!isOpen)
      }
    
      const handleMenuClose = () => {
        setOpen(false)
      }
      
  return (
    <div>
    <div className="flex-row flex space-y-1  w-full place-content-between">
      {/*<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleMenuClose}>Button</Button> */ }
        
      <Link className="z-30 absolute left-12" href="/" onClick={handleMenuClose}>
        <Image src={logoImage} width={70} height={70} alt="Tailwind CSS" />
      </Link>

      <button className="z-50 space-y-2 absolute mt-3 right-12 max-sm:top-9" onClick={handleMenuOpen}> {/* max-md:fixed */}
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
        </button>

      <div className='flex inset-y-0 right-0 w-[31px] h-full'>
      <nav id='menu'
        className={
          isOpen
            ? menuHtml
            : "hidden"//"fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center pt-15 items-center flex-col gap-10 md:text-2xl text-1xl"
              : "hidden"//"block md:flex md:gap-8"
          }
        >
          <li>
            <Link onClick={handleMenuClose} href="/">
              Top
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/pages/member">
              Members
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/pages/tutorials">
              Tutorials
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/pages/showcase">
              Showcase
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} href="/pages/environments">
              Environments
            </Link>
          </li>
        </ul>
      </nav>
      

        
      </div>
    </div>
    </div>
  )
}

 // <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
