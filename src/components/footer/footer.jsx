import React from 'react'
import style from  "./footer.module.css"


export default function footer() {
    return (
      <>
      <div className="text-white ">
         <div className="upper-footer bg-dark">
        <div className="container">
      <div className=" row text-center text-white py-5 g-3">
        <div className="col-md-4">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h3>AROUND THE WEB</h3>
          <ul className="icons list-unstyled d-flex align-items-center justify-content-center gap-3">
            <li className="">
            <i class="fa-brands fa-facebook fa-1x"></i>
            </li>
            <li className="">
              <i className="fab fa-twitter fa-1x"></i>
            </li>
            <li className="">
              <i className="fab fa-linkedin-in fa-1x"></i>
            </li>
            <li className="">
              <i className="fa-solid fa-globe fa-1x"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      </div>
      </div>
      
      <div className="lower-footer">
        <div className="text-center p-2 text-white">
        <p className="m-3 ">Copyright © Your Website 2021</p>
        </div>
      </div>
      </div>
     
      </>
    )
  }