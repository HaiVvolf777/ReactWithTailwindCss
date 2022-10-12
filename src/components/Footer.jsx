import React from 'react'

const Footer = () => {
  return (
    <div>
     <div className="relative bg-black">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">Keep in touch!</h4>
                <h5 className="text-2xl font-extrabold text-green-500 mt-0 mb-2">
                    Find me on any of these platforms,
                </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-green-600 text-lg  font-bold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <li>
                        <a className="text-white hover:text-green-500 font-semibold block  text-sm" rel='noreferrer'  href="https://github.com/HaiVvolf777"
                          target="_blank">Github</a>
                      </li>
                      <li>
                        <a className="text-white hover:text-green-500 font-semibold block  text-sm" rel='noreferrer'  href="https://www.linkedin.com/in/haider-ali-391868229"
                          target="_blank">Linked<span className='text-green-500'>In</span></a>
                      </li>
                      <li>
                        <a className="text-white hover:text-green-500 font-semibold block  text-sm" rel='noreferrer'  href="https://instagram.com/_hadii.7._?igshid=YmMyMTA2M2Y="
                          target="_blank">Instagram</a>
                      </li>
                     

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr className="m-4 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-lg text-gray-600 font-bold py-1">
                    Copyright © 2022  
                    <a href="https://www.linkedin.com/in/haider-ali-391868229" rel='noreferrer'   target="_blank" className="text-white hover:text-green-600"> Haider Ali</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Footer