import React from 'react'
import style from  "./About.module.css"

import StarLine from "../StarLine/StarLine";


export default function About() {
  return (
    <>
    <div className="text-center container text-white py-5 m-5">
      
    <h2 className="fw-bold fs-1 text-uppercase">about component</h2>
    <StarLine/>
    <div className="row">
      <div className="col-md-6 text-start fs-5"><div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div></div>
      <div className="col-md-6 text-start fs-5"><div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div></div>
      
    </div>
    </div>
    </>
  )
}