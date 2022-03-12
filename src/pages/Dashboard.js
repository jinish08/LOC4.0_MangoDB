import React from 'react'
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
      <>    
        <section id="header">
            <nav class="navbar bg-info navbar-info">
                <div class="container-fluid">
                    <a href="" class="navbar-brand brand">Dashboard</a>
                </div>
            </nav>
        </section>
        <section id="side-bar">
            <div class="side-bar">
                <ul class="nav flex-column">
                    <li class="nav-item top-item">
                    <a class="nav-link sidebar-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link sidebar-link" href="#"><i class="fa-solid fa-c"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cricket</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link sidebar-link" href="#"><i class="fa-solid fa-y"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yoga</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link sidebar-link" href="#"><i class="fa-solid fa-dumbbell"></i>&nbsp;&nbsp;&nbsp;&nbsp;Exercise</a>
                    </li>
                </ul>
            </div>
        </section>
    </>

  )
}

export default Dashboard