import React from 'react'

import './SemiCircularProgressbar.scss'

const SemiCircularProgressbar = ({ percent = 50 }) => {
  return (
    <div className="semi-circular-progressbar-wrapper">
      <div className="semi-circular-progressbar" style={{ '--percent': percent }}>
        <div className="dot"></div>
        <svg>
          <defs>
            <linearGradient id="gradient-color">
              <stop offset="0%" stopColor="#ff575f" />
              <stop offset="25%" stopColor="#fa8a07" />
              <stop offset="50%" stopColor="#ffc542" />
              <stop offset="75%" stopColor="#b6d534" />
              <stop offset="100%" stopColor="#93dd2d" />
            </linearGradient>
          </defs>
          <circle className="empty" cx="100" cy="100" r="90" />
          <circle className="progressbar" cx="100" cy="100" r="90" />
        </svg>
        <div className="content">{percent}%</div>
      </div>
    </div>
  )
}

export default SemiCircularProgressbar
