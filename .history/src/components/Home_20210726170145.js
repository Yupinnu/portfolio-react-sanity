import React from 'react';
import image from '../bg03.jpg';

export default function Home() {
     return (
          <main>
             <img src={image} alt="bg03" className="absolute object-cover w-full h-full" />  
             <section className="relative flex justify-center min-h-screen pt-12 lg:pt-10 px-8">
                  <h1 className="text-6xl text-blue-600 font-bold cursive leading-none lg:leading-snug home-name">Welcome to Yupin Studio.</h1>
             </section>
          </main>
     )
}