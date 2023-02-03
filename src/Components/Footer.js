import React from 'react'

export default function Footer() {
    let footerStyling={
        height:"9vh"
    }
    let styLing = {
        padding:"20px"
    }
  return (
    <div className="bg-light text-center" style={footerStyling}>
        <p style={styLing}>
        copyright &#169; 2023. Workout-Tracker. All rights reserved.
        </p>
        
        </div>
  )
}
