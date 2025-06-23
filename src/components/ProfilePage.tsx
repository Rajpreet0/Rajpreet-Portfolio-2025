import CircularText from "./blocks/TextAnimations/CircularText/CircularText"
import ProfileCards from "./ProfileCards"


const ProfilePage = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center ">
        <ProfileCards/>
        <div className="absolute bottom-20 left-10  cursor-pointer">
         <CircularText
            text="CV*CV*CV*CV*"
            onHover="speedUp"
            spinDuration={20}
            className="text-white w-[150px] font-bold"/>
        </div>
    </div>
  )
}

export default ProfilePage