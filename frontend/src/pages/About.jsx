import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Forever was</p>
        <p>Since</p>
        <b className="text-gray-800">Our Mission</b>
        <p>Our Mission</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence</b>
          <p className="text-gray-600">We meticulsly select and vet each product</p>
        </div>
        <div className="border pa-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">With our user-friendly inteface and hassle-free</p>
        </div>
        <div className="border pa-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">Our team dedicated proffetionals is here</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
