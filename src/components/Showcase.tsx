import React from "react"
import Link_ from 'next/link'
import Image_ from 'next/image'
import {Card, CardHeader, CardBody, Image, Link, Button} from "@nextui-org/react"
import githubImage from '../../pic/GitHub-logo.png'

export default function Showcase() {
    return (
        <div>
          <h1 className='flex flex-col items-center text-5xl m-10'>Showcase</h1>
          <div className='flex flex-col p-10 items-center'>
            <article className='w-[50%]'>
              <h2 className='text-3xl mt-5'>2023 Summer</h2>

              <div className="p-2">
              <Card className="py-3">
                <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">プロンプト・ハウス</h4>
                  <Link
                    isExternal
                    href="https://github.com/Gonsix/prompt-house"
                    className="text-tiny font-bold p-1"
                    showAnchorIcon
                  >
                    <Image_ className='' src={githubImage} width={50} height={50} alt="Tailwind CSS" />
                  </Link>
                  <small className="text-default-500">下の画像をクリックでDemoサイト</small>
                </CardHeader>
                
                <CardBody  className="overflow-visible py-2">
                <Link_ className='p-2' href='https://prompt-house.vercel.app/'>
                  <Image
                    isZoomed
                    alt="Card background"
                    src="../data/PromptHouse.png"
                    width={0}
                    height={0}
                    className=" rounded-xl w-full"
                  />
                  </Link_>
                </CardBody>
              </Card>
              </div>

              <div className='p-2'>
              <Card className="py-3">
                <CardHeader className="pb-0 pt-1 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">ダイナミックNFTのフルオンチェーン化による成長するフラクタルツリー</h4>
                  <Link
                    isExternal
                    href="https://github.com/Kyoya67/JBA-Hackathon/blob/main/Fractal_OnChain_GrowNFT.sol"
                    className="text-tiny font-bold p-1"
                    showAnchorIcon
                  >
                    <Image_ className='' src={githubImage} width={50} height={50} alt="Tailwind CSS" />
                  </Link>
                  <small className="text-default-500">下の画像をクリックでDemoサイト</small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                <Link_ href='https://testnets.opensea.io/ja/assets/sepolia/0x47af1e2c252890c79122d9ccbb0fab3081ca1dc1/1'>
                  <Image
                    isZoomed
                    alt="Card background"
                    className="rounded-xl w-full"
                    src="../data/Tree.png"
                    width={0}
                    height={0}
                  />
                  </Link_>
                </CardBody>
              </Card>
              </div>

            </article>
  
            <article className='w-[50%]'>
              <h2 className='text-3xl mt-5'>Aizu Mujin</h2>
              <div>aaaaaaaaaaaa</div>
            </article>
  
            <article>
              <h2 className='mt-5'>Coming Soon ...</h2>
            </article>
          </div>
        </div>
    )
  }
  