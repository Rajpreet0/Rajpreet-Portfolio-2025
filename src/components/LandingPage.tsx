import SplitText from "./blocks/TextAnimations/SplitText/SplitText"
import { SlMouse } from "react-icons/sl";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center relative">
      <div className="flex flex-col items-center justify-center flex-grow">
        <SplitText
          text="Hello"
          className="text-[120px] text-white font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <SplitText
          text="I'm Raj"
          className="text-[120px] text-white font-semibold text-center -mt-12"
          delay={120}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="mb-12">
        <SlMouse className="text-white w-8 h-8 cursor-pointer hover:scale-125 transition-all" />
      </div>
    </div>
  )
}

export default LandingPage