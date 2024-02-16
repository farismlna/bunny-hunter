import React, { useEffect, useState } from 'react'
import { NavigationBar } from './components/navbar'
import history from './assets/history-rabbit.png'
import { Footer } from './components/footer'

export default function App() {

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
  
    // Tambahkan class blur pada navbar saat scroll position lebih besar dari 0
    if (window.scrollY > 0) {
      navbar.classList.add('blur');
    } else {
      navbar.classList.remove('blur');
    }
  });

  return (
    <>
        <header class="fixed-top">
            <nav id='navbar' className='navbar'>
            <a href="#history">History</a>
            <a href="#type">Type</a>
            <a href="#habitat">Habitat</a>
            <a href="#foods">Foods</a>
            </nav>
        </header>

      <main id='content'>
{/* History Page */}
<div className='' style={{backgroundColor: '#d9d9d9'}}>
        <section id='history'>
          <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="row" style={{padding: "80px 0"}}>
              <div className="col-md-6">
                <h1>Bunny</h1>
                <p style={{fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div className="col-md-6 text-end">
                <img src={history} alt="Bunny Hunter" style={{width: '90%'}}/>
              </div>
            </div>
          </div>
          {/* <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="col d-flex" style={{ padding: '40px 0', gap: 20}}>
              <div>
                <h3>Bunny Hunter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div>
                <img src={history} alt="Bunny Hunter"/>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* Type Page */}
      <section id='type'>
        <h1>zsasda</h1>
      </section>

      {/* Habitat Page */}
      <section id='habitat'>
        <h5>asdasd</h5>
      </section>

      {/* Foods Page */}
      <section id='foods'>
        <h5>asdasd</h5>
      </section>
      </main>
      
      <Footer/>
    </>
  )
}
