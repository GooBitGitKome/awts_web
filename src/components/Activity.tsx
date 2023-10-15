import React from "react"
import {Image} from "@nextui-org/react"

export default function Activity() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10 relative top-20'>活動の様子</h1>
          <div className='flex flex-col p-10 text-left items-center'>
            <article className='w-[90%]'>
              <h2 className='text-3xl mt-20 mb-2'>勉強会</h2>
              <div className="flex flex-row items-center max-md:flex-col">
              <Image
                width={0}
                alt=""
                src="../data/Study_1.jpg"
                className="w-[85%] p-3 bg-green-200"
              />
              <div>
                勉強会を隔週土曜日に行っています。<br/>
                主にWorkshopとIceBreakを行い、最近の開発状況や、気になる話題 等について、メンバーと共有しています。共有された情報への議論が毎回白熱しているところもこの勉強会の特徴です。<br/>
              </div>
              </div>
            </article>

            <article className="w-[90%]">
              <h2 className='text-3xl mt-5 mb-2'>食事会</h2>
              <div className="flex flex-row items-center max-md:flex-col">
              <Image
                width={0}
                alt=""
                src="../data/lunch.jpg"
                className="w-[85%] p-3 bg-green-200"
              />
              <div>
                勉強会、Hackathon、外部イベントのあとには、メンバーと一緒にご飯を食べに行くことがあります！<br/>
                もっと知りたいことや、聞きたいことを食事を交えながら、気軽に聞くことができます～！<br/>
                <br/>
              </div>
              </div>
            </article>
  
            <article className="w-[85%]">
              <h2 className='text-3xl mt-5 mb-2'>Hackathon</h2>
            </article>
  
            <article>
              <h2 className='mt-5'>Coming soon...</h2>
            </article>
          </div>
        </div>
    )
  }