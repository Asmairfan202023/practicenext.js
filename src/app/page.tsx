/*eslint-disable */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';



const Homepage = () => {
  return (
    <div>
      <header className='text-grey-600 body-foot'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a className='flex titlefont font-medium item-center text-grey-900 mb-4 md:mb-0'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/017/208/923/small/luxury-letter-a-logo-a-logotype-for-elegant-and-stylish-fashion-symbol-vector.jpg" 
      alt="a logo"
      className='w-10 h-10 rounded-full' />
      
   
      <span className="ml-3 text-xl">Asma Irfan</span></a>
      <nav className='md:mr-auto md:mr-4 md:py-1 md:pl-4 md:border-grey-400 flex flex-wrap items-center text-base justify-center'>
      <Link className='ml-2 mr-5 hover:text-red-900' href={"/"}>Home</Link>
      <Link className='mr-5 hover:text-red-900' href="./components/about">About</Link>
      <Link className='mr-5 hover:text-red-900'href="./components/contact">Contact</Link>
    
      </nav>
  
      <div className='flex space-x-3 mt-3 md:mt-0'>
      <a href="https://www.youtube.com/@dropofchange">
      <button className='Inline flex item-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base'>DropOfChange
      </button>
      </a>
          <a href= 'https://www.youtube.com'>
          <button className='Inline flex item-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base'>youtube</button>
         </a>
         </div>
       

          </div>
                    </header>
                    <div className='flex flex-wrap'>
          <Image src='/a2.png' alt='about image' width={200} height={200} >

          </Image>
        
         <div className=" bg-gray-100 text-center p-8">
        <h1 className="text-4xl font-bold">Porfolio</h1>
        <p className="text-lg mt-4">
          I'm a web developer with a passion for creating clean, user-friendly websites.<br/> I have experience in
          HTML, CSS, JavaScript, React, and of course, Next.js!
        </p>
      </div>
    </div>
         
                    <span></span>
                    <div>
                    <footer className='md:mr-auto md:mr-4 md:py-1 md:pl-4 md:border-grey-300 flex flex-wrap items-center text-base justify-center'>
      <Link href={"/"}></Link>
      <Link className='ml-2 mr-5 hover:text-red-900' href="./components/category1">Privacy Policy</Link>
      <Link className='mr-5 hover:text-red-900' href="./components/category2">category2</Link>
      <Link className='mr-5 hover:text-red-900'href="./components/category3">category3</Link>
    
      </footer>
                    </div>
                            
                    </div>
              
        
                 
  )
}

export default Homepage
