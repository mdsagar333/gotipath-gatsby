import React from "react"
import products from "../../content/products-json-data.json"
import NavItemComponent from "./NavItemComponent"

const ProductWrapperForCommon = () => {
  const navItem = products.map(item => item.category)
  console.log(navItem)
  return (
    <div className="p-3 bg-custom-bg-color">
      <div className="mb-3 text-center ">
        <h1 className="text-lg text-heading-color font-bold mb-2">
          Innovative, Trustworthy, and Secure Products and Services
        </h1>
        <p className="text-[12px] text-custom-p-color">
          Leverage Huawei's over 30 years of technical expertise to protect your
          applications and data
        </p>
      </div>
      <div className="flex flex-wrap bg-white">
        {products.map((item, index) => (
          <NavItemComponent item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ProductWrapperForCommon
