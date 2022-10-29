import React from "react";
import { useEffect, useState } from 'react'





const Resume = () =>{
  const [about, setAbout] = useState(null)

  useEffect(() => {


  const fetchAbout = async () => {
    const response = await fetch('/api/about')
    const json = await response.json()

    if (response.ok) {
      setAbout(json )
    }
  }

  fetchAbout()
}, [])
    return (
      <div className="home">
        {about && about.map((about) => (
          <p key={about._id}>{about.description}</p>
        ))}
      </div>
    );
  
}

export default Resume;
