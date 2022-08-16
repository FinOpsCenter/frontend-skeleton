import React from 'react'

import './SemiCircularProgressBar.scss'

const SemiCircularProgressBar = ({ percent = 50 }) => {
  return (
    <div className="semi-circular-progress-bar" style={{ '--num': percent }}>
      <div class="dot"></div>
      <svg>
        <defs>
          <linearGradient id="gradient-color">
            <stop offset="0%" stop-color="#ff575f" />
            <stop offset="25%" stop-color="#fa8a07" />
            <stop offset="50%" stop-color="#ffc542" />
            <stop offset="75%" stop-color="#b6d534" />
            <stop offset="100%" stop-color="#93dd2d" />
          </linearGradient>
        </defs>
        <circle class="empty" cx="100" cy="100" r="90" />
        <circle class="progress-bar" cx="100" cy="100" r="90" />
      </svg>
      <div class="content">{percent}%</div>
    </div>
  )
}

export default SemiCircularProgressBar
