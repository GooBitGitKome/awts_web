'use client'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Link from "next/link";
import Image_ from "next/image";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
// import bg_Image from "../../pic/Background.png"
import x_Icon from "../../pic/X.png";
import e_mail_Icon from "../../pic/e-mail_icon.png";
import github_Icon from '../../pic/GitHub-logo.png';

export default function TopContents() {
  const list = [
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
      title: "打ち上げ",
      img: "../data/natural.png",
      memo: "",
    },
    {
      title: "CCCCC",
      img: "../data/univ.png",
      memo:'',
    },
    {
      title: "Daaaaaaateee:",
      img: "../data/kinono.png",
      memo: '',
    },

  ]



  return (
    <div className=''>
      <div className="">
      <div className="w-auto">
          <div className="bg-[url('../../pic/Background.png')] w-auto h-screen max-md:bg-contain md:bg-cover bg-center bg-no-repeat flex items-center z-10">
              <div className="w-screen text-center">
                  <h1 className="z-30">
                    <Link className=' text-7xl' href='/'>
                        AWTS
                    </Link>
                  </h1>
              </div>
          </div>
          <a className='text-[5px] opacity-20 absolute bottom-10' href="https://jp.freepik.com/free-vector/connected-concept-illustration_11683776.htm#query=blockchain&position=1&from_view=keyword&track=sph">著作者：storyset／出典：Freepik</a>
      </div>
      <div className="z-10">
          <h1 className='flex flex-col items-center text-5xl m-10'>AWTS</h1>
      </div>
      </div>

      <div className="flex flex-col items-center">
          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5 max-md:text-2xl'>About us</h2>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            { /*<span className='w-1/3 absolute right-20'><a href="/pages/about">more<span aria-hidden="true">&rarr;</span></a></span> */}
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>活動日時/場所</h2> {/* tableに */ }
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>DATE</TableColumn>
                <TableColumn>TIME</TableColumn>
                <TableColumn>LOCATION</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Every other Saturday</TableCell>
                  <TableCell>9:00 ~ 12:00</TableCell>
                  <TableCell>AiCT office or S-Lounge</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>活動の様子</h2>
            <div className="gap-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {list.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log(item.img)}>
                <CardBody className="overflow-visible p-0">
                <Link href='/pages/actives'>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </Link>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.memo}</p>
                </CardFooter>
              </Card>
              ))}
            </div>
            <span className='w-1/3 absolute right-20'><a href="/pages/actives">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>Showcase</h2>
            直近の2作品を掲示<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            <span className='w-1/3 absolute right-20'><a href="/pages/showcase">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>Members</h2>
            <Table color='warning' aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>P</TableCell>
                  <TableCell>Boss</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>M</TableCell>
                  <TableCell>CTO</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>T</TableCell>
                  <TableCell>Ma</TableCell>
                </TableRow>
              </TableBody>
              
            </Table>
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>Events</h2>
            <div className="gap-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {plan.map((item, index) => (
                <Card shadow="sm" key={index} isPressable onPress={() => console.log(item.img)}>
                <CardBody className="overflow-visible p-0">
                <Link href='/pages/events'>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </Link>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.memo}</p>
                </CardFooter>
              </Card>
              ))}
            </div>
            <span className='w-1/3 absolute right-20'><a href="/pages/events">more<span aria-hidden="true">&rarr;</span></a></span>
          </article>

          <article className='w-[40%]'>
            <h2 className='text-3xl font-bold tracking-tight mt-5'>募集情報</h2>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
            sdjeufiwfnwpfudkskd<br/>
          </article>

          <article className=''>
            <h2 className='text-center text-2xl mt-5'>Contact us</h2>
            <div className='flex flex-col items-center'>
            <Link className="" href="https://twitter.com/Aizuweb3">
              <Image_ className='' src={x_Icon} width={35} height={35} alt="Tailwind CSS" />
            </Link>
            <div className='flex flex-row items-center p-2'>
            <Image_ src={e_mail_Icon} width={40} height={40} alt="Tailwond CSS" />
            <Snippet symbol=" " size="md">awtsweb3*gmail.com</Snippet>
            </div>
            <div>メール送信の際は、「*」を「@」に変更してください。</div>
            </div>
          </article>

          <article>
            <div className="flex flex-col items-center">
              <p className="text-xs pt-10">Create by AWTS</p>
            </div>
            <Link className="flex flex-col items-center" href="https://github.com/s1290248/awts_web">
              <Image_ className='' src={github_Icon} width={50} height={50} alt="Tailwind CSS" />
            </Link>
          </article>
    </div>
      </div>
  )
}

{ /*<div className='flex flex-col text-2xl items-center'>
<Tabs className=''>
    <TabList>
      <Tab className='p-3'>About us</Tab>
      <Tab className='p-3'>活動場所/時間</Tab>
      <Tab className='p-3'>活動の様子</Tab>
      <Tab className='p-3'>成果物</Tab>
      <Tab className='p-3'>メンバー</Tab>
      <Tab className='p-3'>募集情報</Tab>
      <Tab className='p-3'>Contact us</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
         /* <p className='text-3xl p-5'>About us</p>
        こんにちは。<br/>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
    </Tabs>
</div> */ }
