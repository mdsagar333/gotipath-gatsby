import React from "react"
import CardItem from "./CardItem"

const NavItemComponent = ({ item, index }) => {
  // function to set height to product container
  const handleAccordionItem = str => {
    const itemWrapper = document.querySelectorAll(".custom__content_wrapper")
    itemWrapper.forEach(item => {
      item.style.maxHeight = null
    })
    const currentItem = document.querySelector(`.custom__${str}`)
    currentItem.style.maxHeight = currentItem.scrollHeight + "px"
  }
  return (
    <div className="basis-full">
      <div
        data-name={item.category}
        className={`${item.category
          .split(" ")
          .join("")
          .replace(
            "&",
            ""
          )} custom__nav_btn p-3 border border-custom-border cursor-pointer`}
        onClick={() =>
          handleAccordionItem(
            item.category.split(" ").join("").replace("&", "")
          )
        }
      >
        <div className="duration-75 pl-8 pr-4 h-10 flex items-center text-base relative">
          <span className="font-bold text-nav-item-color">{item.category}</span>
        </div>
      </div>
      <div className="relative">
        <div
          className={`custom__content_wrapper custom__${item.category
            .split(" ")
            .join("")
            .replace("&", "")} max-h-0 overflow-hidden duration-500`}
        >
          {item.productData.map((item, index) => {
            return <CardItem item={item} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NavItemComponent
