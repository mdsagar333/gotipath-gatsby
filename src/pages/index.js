import React, { useEffect, useState } from "react"
import allProducts from "../../content/products-json-data-new.json"

export default function Home() {
  // const [displayCategory, setDisplayCategory] = useState("Featured")
  const displayCategory = allProducts.map(item => item.category)
  const uniqueCategory = [...new Set(displayCategory)]

  const handleNav = id => {
    console.log(id)
    const product = document.querySelectorAll(".custom_product")
    console.log(product)
  }

  // useEffect(() => {
  //   const displayProduct = allProducts.find(item => {
  //     if (item.category === displayCategory) {
  //       return item
  //     }
  //   })
  //   console.log(displayProduct)
  //   setDisplayData(displayProduct)
  // }, [displayCategory])

  return (
    <div className="bg-slate-200">
      <div className="container md:container mx-auto max-w-[1200px]">
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
          <div className=" basis-[17.5%] md:border-l-[1px] md:border-custom-p-color">
            <div className="md:min-h-[604px] md:h-full flex flex-col justify-between">
              {uniqueCategory.map((item, index) => {
                return (
                  <div
                    data-name={item}
                    key={index}
                    onClick={() => handleNav(item)}
                  >
                    <div className="duration-75 pl-8 pr-4 md:h-10 flex items-center hover:border-l-[2px] hover:border-custom-p-color text-base hover:font-bold">
                      <span>{item}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="h-full grid grid-cols-3 gap-y-3.5">
            {allProducts.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    item.price ? "h-[402px] row-span-2" : "h[190px]"
                  } custom_product`}
                >
                  <div>
                    <div className="pl-4 h-full">
                      <div
                        className={`${
                          item.price
                            ? "flex flex-col justify-between h-[397px]"
                            : "h-[190px]"
                        } p-8 bg-white`}
                      >
                        <div>
                          <img src={item.img} alt="" className="w-[54px]" />
                          <h5 className="mt-2 text-base font-bold">
                            {item.title}
                          </h5>
                          <div className="mt-1 text-sm text-custom-p-color">
                            {item.description}
                          </div>
                        </div>
                        {item.price && (
                          <div>
                            {item.price !== "Free" ? (
                              <div>
                                {" "}
                                From{" "}
                                <span className="text-red-700 text-2xl font-bold">
                                  {item.price}
                                </span>
                                {item.rightText}{" "}
                              </div>
                            ) : (
                              <div>Free</div>
                            )}
                            <a className="bg-red-700 cursor-pointer no-underline outline-0 border-0 text-white h-8 px-6 text-[12px] leading-[30px] mt-8 mb-6 inline-block">
                              Learn More
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
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

// {allProducts[0].productData.map((item, index) => {
// return (
//   <div
//     key={index}
//     className={`${
//       item.price ? "h-[402px] row-span-2" : "h[190px]"
//     }`}
//   >
//     <div>
//       <div className="pl-4 h-full">
//         <div
//           className={`${
//             item.price
//               ? "flex flex-col justify-between h-[397px]"
//               : "h-[190px]"
//           } p-8 bg-white`}
//         >
//           <div>
//             <img src={item.img} alt="" className="w-[54px]" />
//             <h5 className="mt-2 text-base font-bold">
//               {item.title}
//             </h5>
//             <div className="mt-1 text-sm text-custom-p-color">
//               {item.description}
//             </div>
//           </div>
//           {item.price && (
//             <div>
//               {item.price !== "Free" ? (
//                 <div>
//                   {" "}
//                   From{" "}
//                   <span className="text-red-700 text-2xl font-bold">
//                     {item.price}
//                   </span>
//                   {item.rightText}{" "}
//                 </div>
//               ) : (
//                 <div>Free</div>
//               )}
//               <a className="bg-red-700 cursor-pointer no-underline outline-0 border-0 text-white h-8 px-6 text-[12px] leading-[30px] mt-8 mb-6 inline-block">
//                 Learn More
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// )
// })}
