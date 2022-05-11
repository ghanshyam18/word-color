import React, { memo } from 'react'

function Grid(props) {
  const { color } = props;

  return (
    <div
      style={{ backgroundColor: color.hex, height: Math.floor(Math.random() * (250 - 100) + 100) }}
    >
      <span className="name">{color.name}</span>
      <span className="hex">{color.hex}</span>
    </div>
  )
}

export default memo(Grid);