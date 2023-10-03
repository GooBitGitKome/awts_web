import React from "react"
import {Image} from "@nextui-org/react"

export default function Activity() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10'>活動の様子</h1>
          <div className='flex flex-col p-10 text-left items-center'>
            <article className='w-[40%]'>
              <h2 className='text-3xl mt-5'>勉強会</h2>
              <Image
                width={0}
                alt="NextUI hero Image"
                src="../data/Study_1.jpg"
                className="w-full p-3 bg-green-200"
              />
              <div>******************</div>
            </article>
  
            <article className="w-[40%]">
              <h2 className='text-3xl mt-5'>Hackathon</h2>
            </article>
  
            <article>
              <h2 className='mt-5'>Coming soon...</h2>
            </article>
          </div>
        </div>
    )
  }