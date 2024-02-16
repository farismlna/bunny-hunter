import React from 'react'

export const Footer = () => {
  return (
    <div className='row'>
    <div className='bg-black d-flex justify-content-center'>
        <div className='pt-3 mb-4 text-center'>
            <span className='text-white fw-bold fs-2 p-10'>
                Bunny Lover
            </span>
        </div>
    </div>
    <div className='col w-full bg-black d-flex justify-content-evenly'>
        <div className='text-white row'>
            <text className='fw-bold'>Content</text>
            <ul className='' style={{listStyle:'none'}}>
                <li>History</li>
                <li>Type</li>
                <li>Habitat</li>
                <li>Foood</li>
            </ul>
        </div>
        <div className='text-white row'>
            <span className='fw-bold mb-3'>Contact</span>
            <ul style={{listStyle:'none'}}>
                <li className=''>
                    <a href="/" className='text-white mx-2'>
                        <i class="bi bi-facebook" style={{fontSize: 24}}></i>
                    </a> 
                    <span>Bunny Lover</span>
                </li>
                <li>
                    <a href="/" className='text-white mx-2 align-items'>
                        <i class="bi bi-instagram" style={{fontSize: 24}}></i>
                    </a> 
                    @connexsoft55
                </li>
                <li>
                    <a href="/" className='text-white mx-2 align-items'>
                        <i class="bi bi-telephone-fill" style={{fontSize: 24}}></i>
                    </a> 
                    +62 819 0588 3680
                </li>
                <li>
                    <a href="/" className='text-white mx-2 align-items'>
                        <i class="bi bi-envelope-fill" style={{fontSize: 24}}></i>
                    </a> 
                    bunnylover@gmail.com
                </li>
            </ul>
        </div>
        <div>
            <div className=''>
                <text className='text-white'>Bunny Lover its a website statis journaling about rabbit</text>
                <p className='text-white'>Created by Bunny Lover Group</p>
            </div>
            <div className=' row bg-black'>
                <div className='col-md-8' ></div>
            </div>
        </div>
    </div>
    <div className='bg-black w-full pt-5 d-flex justify-content-between'>
        <span className='text-white'>Copyright &copy;2024 <a href='#history' className='text-decoration-none'>Bunny Lover</a></span>
        <span className='text-secondary'>
            <i class="bi bi-geo-alt-fill text-secondary"></i> 
            Jl. SMEA 6 Jl. Mayjen Sutoyo, Cawang</span>
    </div>
    </div>
  )
}