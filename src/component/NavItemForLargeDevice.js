import React from "react"

const NavItemForLargeDevice = ({ itemText, handleNav, addActiveClass }) => {
  return (
    <div
      className={`${itemText
        .split(" ")
        .join("")
        .replace("&", "")} custom__nav_btn `}
      onMouseEnter={() =>
        handleNav(itemText.split(" ").join("").replace("&", ""))
      }
    >
      <div
        onMouseLeave={() =>
          addActiveClass(itemText.split(" ").join("").replace("&", ""))
        }
        className="duration-75 pl-8 not-active pr-4 h-10 flex items-center text-base hover:font-bold relative"
      >
        <span className="text-bold text-none">{itemText}</span>
      </div>
    </div>
  )
}

export default NavItemForLargeDevice
