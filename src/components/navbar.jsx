import React from 'react'

export const NavigationBar = () => {
  return (
    <>
        
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-dark text-center">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Type</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Habitat</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Gallery</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}
        <div id="blurryscroll" aria-hidden="true"></div>
        <header class="fixed-top">
            <nav>
            <a href="#history">History</a>
            <a href="#type">Type</a>
            <a href="#habitat">Habitat</a>
            <a href="#foods">Foods</a>
            </nav>
        </header>
    </>
  )
}
