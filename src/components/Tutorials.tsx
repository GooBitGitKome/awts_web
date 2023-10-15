import React from "react"

import _Link from 'next/link'
import Image from 'next/image'
import {Link} from "@nextui-org/react"
import ZombiesImage from '../../pic/Zombie.png'
import FaucetImage from '../../pic/faucet.png'
import BekoImage from '../../pic/beko.jpeg'

export default function Tutorials() {
    return (
        <div className=''>
          <h1 className='flex flex-col items-center text-5xl m-10 relative top-20'>Tutorials</h1>
          <div className='flex flex-col p-10 items-center'>
            
          <article className='w-[90%]'>
              <h2 className='text-3xl mt-20'>CryptoZombies</h2>
              <div className='flex flex-row w-[100%]'>
                <Link
                  isExternal 
                  href="https://cryptozombies.io/jp/course" 
                  showAnchorIcon
                  className="w-[50%]"
                >
                  CryptoZombies
                </Link>
                <div>
                  <Image src={ZombiesImage} width={180} height={180} className="w-[100%]" alt="Tailwind CSS" />
                </div>
              </div>
            </article>
  
  
            <article className='w-[90%]'>
              <h2 className='text-3xl mt-5'>Faucet App</h2>
              <div className='flex flex-row w-[100%]'>
                <Link
                  isExternal
                  href="https://manablog.org/solidity-faucet/"
                  showAnchorIcon
                  className=""
                >
                  Create the Faucet App
                </Link>
                <div>
                  <Image src={FaucetImage} width={180} height={180} alt="Tailwind CSS" />
                </div>
              </div>
            </article>
  
            <article className='w-[90%]'>
              <h2 className='text-3xl mt-5'>Aizu Mujin</h2>
              <div className='flex flex-row w-[100%]'>
                <Link
                  isExternal
                  href="/"
                  showAnchorIcon
                  className=""
                >
                  会津無尽へ
                </Link>
              <div>
                <Image src={BekoImage} width={180} height={180} alt="Tailwind CSS" />
              </div>
              </div>
            </article>
  
            
  
            <article className='w-[40%]'>
              <h2 className='text-3xl mt-20'>Other tutorials</h2>
              Coming soon...<br/>
            </article>
  
            
          </div>
        </div>
    )
  }
  