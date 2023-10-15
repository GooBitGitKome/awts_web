import React from "react"
import {Image} from "@nextui-org/react"

export default function Eevents() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10 relative top-20'>Events</h1>
          <div className='flex flex-col p-10 text-left items-center'>
            <article className='w-[90%]'>
              <h2 className='text-3xl mt-20 mb-2'>お花見</h2>
              <Image
                width={0}
                alt=""
                src="../data/kinono.png"
                className="w-[50%] p-3 bg-blue-200 max-lg:w-[70%]"
              />
              <div>
                会津の桜を楽しみながら、メンバーの交流を深めます～<br/>
              </div>
            </article>

            <article className="w-[90%]">
              <h2 className='text-3xl mt-5 mb-2'>BBQ</h2>
              <Image
                width={0}
                alt=""
                src="../data/natural.png"
                className="w-[50%] p-3 bg-blue-200 max-lg:w-[70%]"
              />
              <div>
                夏～秋にかけてBBQを行います！<br/>
              </div>
            </article>
  
            <article className="w-[90%]">
              <h2 className='text-3xl mt-5 mb-2'>紅葉狩り</h2>
              <Image
                width={0}
                alt=""
                src="../data/univ.png"
                className="w-[50%] p-3 bg-blue-200 max-lg:w-[70%]"
              />
              <div>
                紅葉を楽しみます！<br/>
              </div>
            </article>
  
            <article>
              <h2 className='mt-5'>Coming soon...</h2>
            </article>
          </div>
        </div>
    )
  }
  