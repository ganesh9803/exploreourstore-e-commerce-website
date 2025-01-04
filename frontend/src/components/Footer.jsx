import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
            <h1 className='w-28 text-3xl mb-5'>Exploreourstore</h1>
                <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel numquam excepturi aut beatae ut iste veniam illum modi magnam, odio suscipit sunt voluptates a, pariatur earum, amet voluptatibus veritatis? Eos.
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-221-334-4445</li>
                    <li>contact@exploreoutstore.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ explore.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
