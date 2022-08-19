import React from 'react'

import './SemiCircularProgressbar.scss'

const SemiCircularProgressbar = ({ percent = 50, radio = 50, circledContent = false }) => {
  return (
    <div
      className={`semi-circular-progressbar-wrapper ${circledContent ? 'circled' : ''}`}
      style={{
        '--percent': percent,
        '--radio': radio,
        '--perimeter': radio * 0.9 * 2 * 3.14,
        '--stroke': radio * 0.2
      }}
    >
      <div className="semi-circular-progressbar">
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
          <circle className="empty" cx={radio} cy={radio} r={radio * 0.9} />
          <circle className="progressbar" cx={radio} cy={radio} r={radio * 0.9} />
        </svg>
        <div className={circledContent ? 'circled-content' : 'content'}>{percent}%</div>
      </div>
    </div>
  )
}

export default SemiCircularProgressbar
