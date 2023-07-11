import React from 'react'

import LogoWhite from '../assets/img/logo-white.svg'

const Footer = () => {
  return (
    <footer className='bg-primary py-12 '>
      <div className='container mx-auto text-white flex flex-col
       md:flex-row justify-center items-center md:justify-start md:items-start gap-3 md:gap-0'>
        <a href='/' >
        <img className='lg:mr-[18.5em] md:mr-[10em]' src={LogoWhite} />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
