import React from 'react'

import './CircularProgressbar.scss'

const CircularProgressbar = ({ percent = 50, radio = 50, color = 'green' }) => {
  return (
    <div
      className="circular-progressbar"
      style={{
        '--percent': percent,
        '--radio': radio,
        '--perimeter': radio * 0.9 * 2 * 3.14,
        '--stroke': radio * 0.2
      }}
    >
      <svg>
        <circle className="empty" cx={radio} cy={radio} r={radio * 0.9} />
        <circle className={`progressbar ${color}`} cx={radio} cy={radio} r={radio * 0.9} />
      </svg>
      <div className="content">{percent}%</div>
    </div>
  )
}

export default CircularProgressbar
