import React from "react"
import CompareComponent from "../component/CompareComponent"
import ProductWrapperForCommon from "../component/ProductWrapperForCommon"
import ProductWrapperForLarge from "../component/ProductWrapperForLarge"

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <ProductWrapperForLarge />
      </div>

      <div className="block md:hidden">
        <ProductWrapperForCommon />
      </div>
      <div className="my-4">
        <CompareComponent />
      </div>
    </>
  )
}
