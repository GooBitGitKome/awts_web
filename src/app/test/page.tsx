'use client'
import React from 'react';
import { slide as Menu } from 'react-burger-menu'

export default function page() {
    /*const showSettings = (event: any) => {
        event.preventDefault();
      }; */

  return (
    <div id="outer-container">
        <Menu className='bg-green-200' pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
            <main id='page-wrap'>
            <a id="home" className="menu-item flex justify-center p-3" href="/">Home</a>
            <a id="about" className="menu-item flex justify-center p-3" href="/pages/member">Member</a>
            <a id="contact" className="menu-item flex justify-center p-3" href="/pages/tutorials">Tutorials</a>
            </main>
        </Menu>
        <div className='flex justify-center items-center h-screen'> Hello world!</div>
    </div>
  )
}

 // <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
