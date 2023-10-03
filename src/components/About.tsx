import Image from "next/image"
import logoImage from "../../pic/AWTS_logo.png";
import StudyImage5 from "../../pic/Study_3.jpg";

export default function About() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10'>About</h1>
          <div className='flex flex-col p-10 text-left items-center '>
            <article className='w-[50%]'>
                <div className="flex flex-row p-2">
                <Image className='w-1/3' src={logoImage} alt="Tailwind CSS"/>
                <article>
                 紹介文をのせます！<br/>
                ...<br/>
                </article>
                </div>
            </article>
  
            <article className="w-[50%]">
            <h2 className="text-3xl">勉強会</h2>
            <div className="flex flex-row p-2">
              <article>
                勉強会では、、、<br/>
                ...<br/>
              </article>
              <Image className='w-1/2 p-2' src={StudyImage5} alt="Tailwind CSS"/>
              </div>
            </article>
  
            <article className="w-[40%]">
              <h2 className='text-3xl mt-5'>Hackathon</h2>
            </article>
          </div>
        </div>
    )
  }