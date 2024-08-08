
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Avatar } from '@material-tailwind/react';
import { CiHeart } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { BsPieChart } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-custombrown w-screen">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Skillsphere</h1>
        <div className="hidden lg:flex space-x-4">
          {['Overview', 'Courses', 'Assignment', 'Classmates', 'Schedule', 'Community'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-400 font-bold hover:text-white group relative"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <BsPieChart size={20} color='white' />
          <CiHeart size={30} color='white'/>
          <BsBell size={20} color='white' />
          <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-2 mt-4">
          {['Overview', 'Courses', 'Assignment', 'Classmates', 'Schedule', 'Community'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-400 font-bold hover:text-white group relative"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className='flex justify-start items-center gap-5'>
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
            <BsPieChart size={20} color='white' />
            <CiHeart size={30} color='white'/>
            <BsBell size={20} color='white' />
          </div>
        </div>
      )}
    </nav>
  );
}
