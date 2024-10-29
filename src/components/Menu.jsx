import React from 'react'

const Menu = ({className,menuTxt}) => {
  return (
    <ul>
        <li className={`font-DMSans font-regular text-sm ml-10 capitalize ${className}`}>{menuTxt}</li>
    </ul>
  )
}

export default Menu