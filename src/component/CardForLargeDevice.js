import React from "react"

const CardForLargeDevice = ({ item }) => {
  return (
    <div className={`${item.price ? "h-[420px] row-span-2" : "min-h[190px]"}`}>
      <div>
        <div className="pl-4 h-full">
          <div
            className={`${
              item.price
                ? "flex flex-col justify-between h-[410px]"
                : "min-h-[215px]"
            } p-8 bg-white hover:shadow-lg duration-300`}
          >
            <div className="flex flex-col">
              <img src={item.img} alt="" className="w-[54px]" />
              <div>
                <h5 className="mt-2 text-base font-bold">{item.title}</h5>
                <div className="mt-1 text-sm text-custom-p-color">
                  {item.description}
                </div>
              </div>
            </div>
            {item.price && (
              <div className="">
                {item.price !== "Free" ? (
                  <div className="text-sm">
                    From
                    <span className="text-red-700 text-[22px] font-bold">
                      {item.price}
                    </span>
                    {item.rightText}
                  </div>
                ) : (
                  <div className="text-red-700 text-2xl font-bold">Free</div>
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
}

export default CardForLargeDevice
