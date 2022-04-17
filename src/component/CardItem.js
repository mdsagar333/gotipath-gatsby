import React from "react"

const CardItem = ({ item }) => {
  return (
    <div className="custom_item">
      <div>
        <div>
          <div className="pl-4 mb-2">
            <div>
              <div className="flex my-4 items-start">
                <img
                  src={item.img}
                  alt=""
                  className="w-[50px] mr-3 inline-block"
                />
                <div>
                  <h5 className="text-[14px] font-[500] text-left">
                    {item.title}
                  </h5>
                  <div className="mt-1 text-[12px] text-custom-p-color text-left">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
