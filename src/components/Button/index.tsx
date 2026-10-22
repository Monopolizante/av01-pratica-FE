import {CiHeart} from 'react-icons/ci'

interface ButtonProps {
  text: string;
}

function Button({text}:ButtonProps) {
  return (
    <div className={`flex items-center gap-2 bg-[#0F8A7E] rounded-2xl p-2`} >
      <CiHeart size={20} color={"#F3FAF8"} />
      <a className='text-white'>{text}</a>
    </div>
  )
}

export default Button