import React from "react"
import products from "../../content/products-json-data.json"
import CardForLargeDevice from "./CardForLargeDevice"
import NavItemForLargeDevice from "./NavItemForLargeDevice"

export default function ProductWrapperForLarge() {
  // const displayCategory = allProducts.map(item => item.category)
  // const uniqueCategory = [...new Set(displayCategory)]

  // function for handling active class and display product items
  const handleNav = id => {
    // selecting necessary DOM elements
    const clsStr = id.split(" ").join("").replace("&", "")
    const product = document.querySelectorAll(".custom__product_container")
    const navBtn = document.querySelectorAll(".custom__nav_btn")
    const navBtnActive = document.querySelector(`.${clsStr}`)
    const activeContainer = document.querySelector(`.product_${clsStr}`)

    // toggling display block and hidden in custom__product_container
    product.forEach(p => {
      if (p.classList.contains("block")) {
        p.classList.remove("block")
        p.classList.add("hidden")
      }
    })

    // removing active class from nav button
    navBtn.forEach(btn => {
      btn.classList.remove("active")
    })

    // activating selected product container
    activeContainer.classList.remove("hidden")
    activeContainer.classList.add("block")

    // adding active class to selected nav item
    navBtnActive.classList.add("active")
  }

  // fucntion to add active class in nav item on mouse out
  const addActiveClass = id => {
    const clsStr = id.split(" ").join("").replace("&", "")
    const navBtn = document.querySelector(`.${clsStr}`)
    navBtn.classList.add("active")
  }

  return (
    <div className="bg-[#F1F2F6] px-3 py-5">
      <div className="container mx-auto max-w-[1200px]">
        <div className="pb-8">
          <h1 className="text-3xl text-center leading[40px] font-bold">
            Innovative, Trustworthy, and Secure Products and Services
          </h1>
          <p className="text-center mt-3.5">
            Leverage Huawei's over 30 years of technical expertise to protect
            your applications and data
          </p>
        </div>
        <div className="flex">
          <div className=" basis-[17%] border-l-[1px] border-custom-border">
            <div className="min-h-[604px] flex flex-col justify-between">
              {products.map((item, index) => {
                return (
                  <NavItemForLargeDevice
                    key={index}
                    handleNav={handleNav}
                    addActiveClass={addActiveClass}
                    itemText={item.category}
                  />
                )
              })}
            </div>
          </div>
          <div className="h-full basis-[82%]">
            {products.map((product, index) => {
              return (
                <div
                  className={`product_${product.category
                    .split(" ")
                    .join("")
                    .replace("&", "")} custom__product_container ${
                    product.category === "Featured" ? "block" : "hidden"
                  }`}
                  key={index}
                >
                  <div className="grid grid-cols-3 gap-y-3.5">
                    {product.productData.map((item, index) => {
                      return <CardForLargeDevice item={item} key={index} />
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
