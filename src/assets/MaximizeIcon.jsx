import React from 'react'

const MaximizeIcon = ({className}) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} >
      <path d="M12.5 2.5H17.5V7.5"/>
      <path d="M7.5 17.5H2.5V12.5"/>
      <path d="M17.5 2.5L11.6667 8.33333" />
      <path d="M2.5 17.5L8.33333 11.6667" />
    </svg>
  )
}

export default MaximizeIcon
