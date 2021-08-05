import React from 'react';
import image from '../thailand.jpg';

export default function Home() {
     return (
          <main>
             <img src={image} alt="thailand" className="absolute object-cover w-full h-full " />  
             <section>
                  <h1>Hi, I am Yupin.</h1>
             </section>
          </main>
     )
}