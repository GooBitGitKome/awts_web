'use client'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Link_ from "next/link";
import Image_ from "next/image";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
import {Link} from "@nextui-org/react"
// import bg_Image from "../../pic/Background.png"
import x_Icon from "../../pic/X.png";
import e_mail_Icon from "../../pic/e-mail_icon.png";
import github_Icon from '../../pic/GitHub-logo.png';
import JBA_Icon from '../../pic/logo.png'


export default function TopContents() {
  const active = [
    {
      title: "隔週勉強会",
      img: "../data/Study_1.jpg",
      memo: "",
    },
    {
      title: "Hackathon",
      img: "../data/hackathon.jpg",
      memo:'',
    },
    {
      title: "食事会",
      img: "../data/lunch.jpg",
      memo: '',
    },

  ]

  const plan = [
    {
      title: "お花見",
      img: "../data/kinono.png",
      memo: '',
    },
    {
      title: "BBQ",
      img: "../data/natural.png",
      memo: "",
    },
    {
      title: "紅葉狩り",
      img: "../data/univ.png",
      memo:'',
    },
  ]

    const show = [
      {
        title: "プロンプト・ハウス",
        img: "../data/PromptHouse.png",
        memo: "",
      },
      {
        title: "ダイナミックNFTのフルオンチェーン化による成長するフラクタルツリー",
        img: "../data/Tree.png",
        memo:'',
      },
  ]



  return (
    <div className=''>
      <div className="">
      <div className="w-auto">
          <div className="bg-[url('../../pic/Background.png')] w-auto h-screen max-md:bg-contain md:bg-cover bg-center bg-no-repeat flex items-center z-10">
              <div className="w-screen text-center">
                  <h1 className="z-30">
                    <Link_ className='text-7xl' href='/'>
                        AWTS
                    </Link_>
                  </h1>
              </div>
          </div>
          <a className='text-[5px] opacity-25 absolute bottom-10' href="https://jp.freepik.com/free-vector/connected-concept-illustration_11683776.htm#query=blockchain&position=1&from_view=keyword&track=sph">著作者：storyset／出典：Freepik</a>
      </div>
      <div className="z-10">
          <h1 className='flex flex-col items-center text-5xl m-10 mt-20'>AWTS</h1>
      </div>
      </div>

      <div className="flex flex-col relative left-0">
          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-20 mb-3'>About us</h2>
            私たちは、主にWeb3の核となる技術の「ブロックチェーン」について学んでいます！<br/>
            Web3技術を活用したSolidityによるアプリ開発や、話題になっている技術(大規模言語モデル 等)の勉強、開発を行っています。<br/>
            勉強会のみんなで一緒に学んでいくので、プログラミング初心者の方も大歓迎！！<br/>
            ぜひ、私たちと一緒に学びませんか？<br/>
            { /*<span className='w-1/3 absolute right-20'><a href="/pages/about">more<span aria-hidden="true">&rarr;</span></a></span> */}
          </article>

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-10 mb-3'>活動日時/場所</h2> {/* tableに */ }
            <Table aria-label="Location and date table" className="w-[80%]">
              <TableHeader>
                <TableColumn>DATE</TableColumn>
                <TableColumn>TIME</TableColumn>
                <TableColumn>LOCATION</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="max-md:text-[8px]">Every other Saturday</TableCell>
                  <TableCell className="max-md:text-[8px]">9:00 ~ 12:00</TableCell>
                  <TableCell className="max-md:text-[8px]">AiCT office or S-Lounge</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-10 mb-2'>活動の様子</h2>
            <div className="w-[77%] gap-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {active.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log(item.img)}>
                <CardBody className="overflow-visible p-0">
                <Link_ href='/pages/actives'>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </Link_>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.memo}</p>
                </CardFooter>
              </Card>
              ))}
            </div>
            <span className='w-1/3 absolute right-[2%]'><a href="/pages/actives">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-20 mb-2'>Showcase</h2>
            <div className="w-[77%] gap-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {show.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log(item.img)}>
                <CardBody className="overflow-visible p-0">
                <Link_ href='/pages/showcase'>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </Link_>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b className="">{item.title}</b>
                  <p className="text-default-500">{item.memo}</p>
                </CardFooter>
              </Card>
              ))}
            </div>
            <span className='w-1/3 absolute left-[45%] max-lg:left-[65%]'><a href="/pages/showcase">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          { /* <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-20 mb-2'>Members</h2>
            <Table aria-label="Members table" className="w-[75%]">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>***</TableCell>
                  <TableCell>***</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>****</TableCell>
                  <TableCell>**</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>***</TableCell>
                  <TableCell>****</TableCell>
                </TableRow>
              </TableBody>
              
            </Table>
              </article> */ }

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-10 mb-2'>Events</h2>
            <div className="w-[77%] gap-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {plan.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log(item.img)}>
                <CardBody className="overflow-visible p-0">
                <Link_ href='/pages/events'>
                  <Image
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </Link_>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.memo}</p>
                </CardFooter>
              </Card>
              ))}
            </div>
            <span className='w-1/3 absolute right-[2%]'><a href="/pages/events">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-20 mb-2'>募集情報</h2>
            <Table aria-label="Recruitment table" className="w-[75%]">
              <TableHeader>
                <TableColumn>PERSON</TableColumn>
                <TableColumn>TIME</TableColumn>
                <TableColumn>LOCATION</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className="max-md:text-[8px]">Web3について興味のある方<br/>アプリ開発を一緒に行う仲間を探している方<br/>新しいことに挑戦したい方<br/></TableCell>
                  <TableCell className="max-md:text-[8px]">Saturday: 9:00 ~ 12:00<br/>Weekdays: 17:00 ~ 20:00<br/></TableCell>
                  <TableCell className="max-md:text-[8px]">AiCT office<br/>S-Lounge<br/></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>

          <article className='w-[93%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-20 mb-2'>受賞歴</h2>
            <div className="flex flex-row">
              <Link
                  isExternal
                  href="https://jba-web.jp/activity/20230902"
                  className="mr-5"
                >
                  JBA Blockchain Hackathon 2023 Summer
                </Link>
                <div className="">Ginco賞</div>
              </div>
          </article>

          <article className=''>
            <h2 className='text-center text-2xl mt-20'>Contact us</h2>
            <div className='flex flex-col items-center'>
            <Link_ className="" href="https://twitter.com/Aizuweb3">
              <Image_ className='' src={x_Icon} width={35} height={35} alt="" />
            </Link_>
            <div className='flex flex-row items-center p-2'>
            <Image_ src={e_mail_Icon} width={40} height={40} alt="" />
            <Snippet symbol=" " size="md">awtsweb3*gmail.com</Snippet>
            </div>
            <div>メール送信の際は、「*」を「@」に変更してください。</div>
            </div>
          </article>

          <article>
            <div className="flex flex-col items-center">
              <p className="text-xl pt-10 mb-2">所属団体</p>
            </div>
            <Link_ className="flex flex-col items-center" href="https://jba-web.jp">
              <Image_ className='' src={JBA_Icon} width={50} height={50} alt="Tailwind CSS" />
            </Link_>
          </article>

          <article>
            <div className="flex flex-col items-center">
              <p className="text-xs pt-10">Create by AWTS</p>
            </div>
            <Link_ className="flex flex-col items-center" href="https://github.com/s1290248/awts_web">
              <Image_ className='' src={github_Icon} width={50} height={50} alt="Tailwind CSS" />
            </Link_>
          </article>
    </div>
      </div>
  )
}
