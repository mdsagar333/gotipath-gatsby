import React from "react"
import compareData from "../../content/compare-json-data.json"
import { BsCheck2 } from "react-icons/bi"

const CompareComponent = () => {
  const featureName = [
    "Ssl",
    "Automatic_scaling",
    "Automatic_backups",
    "Content_distribution_network_(CDN)",
    "Password_protection",
    "Custom_forms",
    "Site_search",
    "Automatic_security_patching_and_maintenance",
    "3rd_party_security_review",
    "Visual_design_and_publishing_platform",
  ]

  const iconBlack =
    "https://assets.website-files.com/5f1efd2768fed6b653883c9d/5f2b2eb48597467f3c27a4e4_checkmark-black.svg"

  const iconBlue =
    "https://assets.website-files.com/5f1efd2768fed6b653883c9d/5f2b2ef0c5ffe25dbdc1f1d1_checkmark-blue.svg"
  return (
    <div className="p-3 container mx-auto max-w-[1200px]">
      <div className="text-left">
        <h1 className="mb-4 text lg:text-4xl text-2xl">
          <span className="lg:text-9xl text-7xl mb-3 inline-block">
            Compare
          </span>
          <br />
          How Webflow's hosting stacks up.
        </h1>
      </div>
      <div className="">
        <div className=""></div>
        <div className="flex flex-col lg:flex-row lg:justify-end md:border-b">
          <div> {} </div>
          <div className="flex justify-between">
            {compareData.map((item, index) => {
              return (
                <div key={index} className="md:p-4 p-2">
                  <img
                    src={item.logoSrc}
                    alt=""
                    className="pr-3 md:w-[110px] w-auto h-[16px]"
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-end md:border-b">
          <div></div>
          <div className="flex justify-between">
            {compareData.map((item, index) => {
              return (
                <div key={index} className="p-2 md:p-4 text-center">
                  <div
                    className={`md:w-[110px] w-auto md:text-[18px] text-[15px] leading-[100%] font-medium px-1 py-1.5 ${
                      index === 0
                        ? "bg-custom-bg-with-opacity text-[#4353ff]"
                        : ""
                    }`}
                  >
                    ${item.price}{" "}
                    <span className="md:text-[15px] text-[12px] text-[rgba(0,0,0,.5)]">
                      USD
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <div>
            {featureName.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-between font-bold border-b last:border-b-0"
                >
                  <div
                    className={`text-xs md:text-base md:font-semibold mb-3 mt-2 text md:mb-0 font-normal ${
                      item === "Ssl" ? "uppercase" : ""
                    }`}
                  >
                    {item.split("_").join(" ")}
                  </div>
                  <div>
                    <div className="flex justify-between ml-4 mg:ml-0">
                      {compareData.map((ele, index) => {
                        const newItem =
                          item[0].toLowerCase() + item.substring(1)
                        const imgSrc = index === 0 ? iconBlue : iconBlack
                        return (
                          <div
                            className="md:p-4 p-2 text-center md:text-left"
                            key={index}
                          >
                            <div className="pr-3 md:w-[100px] w-auto">
                              {ele[newItem].status ? (
                                <img
                                  src={imgSrc}
                                  className="w-[15px] text-center"
                                />
                              ) : ele[newItem].text ? (
                                <div className="text-xs font-normal">
                                  {ele[newItem].text}
                                </div>
                              ) : (
                                <div>--</div>
                              )}
                            </div>
                          </div>
                        )
                      })}
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

export default CompareComponent
