

import { PiPawPrintFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { RiAttachment2 } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { Avatar } from '@material-tailwind/react';
import { FaEye } from "react-icons/fa";

export default function CommunityCart() {
    return (
        <div className="mb-8 md:p-8">
            <div className="w-full  md:w-full  bg-white h-fit shadow-lg rounded-md">
                <div className="flex flex-col lg:flex-row md:flex-col m-4 md:m-8 justify-between items-center">
                    <div className=" p-4 flex gap-4 items-center ">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl border-2 bg-orange-500 shadow-xl grid place-content-center">
                            <PiPawPrintFill size={24} className="md:size-[30px]" color="red" />
                        </div>
                        <div className="text-2xl md:text-2xl font-bold">Community</div>
                    </div>
                    <div className="flex gap-2 md:gap-4 mt-4 md:mt-0">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-gray-500 grid place-content-center">
                            <CiSearch size={20} className="md:size-[30px]" color="gray-600" />
                        </div>
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 bg-orange-500 border-orange-700 grid place-content-center">
                            <IoMdClose size={20} className="md:size-[30px]" color="white" />
                        </div>
                    </div>
                </div>
                <div className="h-[0.5px] bg-gray-300"></div>
                <div className="m-4 md:m-8 text-sm md:text-base">
                    <p className="mt-2 mb-3">
                        Hey everyone! 🎉
                    </p>
                    <p className="mt-1 text-gray-600 mb-3">
                        I'm thrilled to share some exciting news with you all. Starting next week, we'll be launching a brand new series on our blog focusing on your topic of interest. 🎉
                    </p>
                    <p className="mt-1 text-gray-600 mb-3">
                        Get ready for insightful articles, expert interviews, and valuable tips that will benefit the community.
                    </p>
                    <p className="mt-1 text-gray-600 mb-3">
                        Your feedback has always been our driving force, so feel free to drop your thoughts and suggestions in the comments. Let's keep this journey together! 🤝
                    </p>
                    <p className="mt-1 text-gray-600 mb-3">
                        Stay tuned for more updates!
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <p className="text-gray-500">Add Tags :</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">study-group</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">share-insight</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">help-question</p>
                        <p className="text-red-500 border-2 border-red-500 rounded-2xl px-2 cursor-pointer">+ Add Tags</p>
                    </div>
                </div>
                <div className="h-[0.5px] bg-gray-300"></div>
                <div className="flex justify-between items-center m-3">
                    <div className="flex gap-3 md:gap-5">
                        <BsEmojiSmile size={16} className="md:size-[20px]" />
                        <CiImageOn size={16} className="md:size-[20px]" />
                        <RiAttachment2 size={16} className="md:size-[20px]" />
                    </div>
                    <div className="bg-orange-500 p-2 h-8 w-16 rounded-md grid place-content-center text-white cursor-pointer">
                        Post
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-5 text-gray-500 ml-3">
                    {[
                        { icon: <MdOutlinePostAdd size={16} className="md:size-[20px]" />, label: 'Post' },
                        { icon: <BiMessageDots size={16} className="md:size-[20px]" />, label: 'Discussion' },
                        { icon: <RiAttachment2 size={16} className="md:size-[20px]" />, label: 'Resources' },
                        { icon: <TfiAnnouncement size={16} className="md:size-[20px]" />, label: 'Announcement' }
                    ].map(({ icon, label }) => (
                        <p key={label} className="flex gap-2 md:gap-3 items-center group relative cursor-pointer">
                            {icon}
                            {label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </p>
                    ))}
                </div>
                <div className="h-[0.5px] bg-gray-300 mt-5"></div>
                <div className="p-3 flex flex-col flex-wrap">
                    <div className="flex justify-between items-center text-gray-500">
                        <div className="flex gap-2 md:gap-3 cursor-pointer">
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
                            <p>By : Milkey Jonah</p>
                        </div>
                        <p>2d ago</p>
                    </div>
                    <p className="mt-2 font-semibold mb-3">Title of the Discussion will be placed here</p>
                    <p className="text-gray-500">This ipo will be game changer land it in region This ipo will be game changer land it in region This ipo will be game changer land This ipo will be game changer land</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        <p className="text-gray-500">Add Tags :</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">study-group</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">share-insight</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">help-question</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2 cursor-pointer">+ More Tags</p>
                    </div>
                    <div className="flex  gap-3 md:gap-5 text-gray-500 mt-5">
                        <p className="flex gap-3 items-center  text-black"><BiMessageDots /> 28 Replies</p>
                        <p className="flex gap-3 items-center"><FaEye /> 875 views</p>
                    </div>
                </div>
                <div className="h-[0.5px] bg-gray-300 mt-5"></div>
                <div className="p-3 flex flex-col flex-wrap">
                    <div className="flex justify-between items-center text-gray-500">
                        <div className="flex gap-2 md:gap-3">
                            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
                            <p>By : Milkey Jonah</p>
                        </div>
                        <p>2d ago</p>
                    </div>
                    <p className="mt-2 font-semibold mb-3">Title of the Discussion will be placed here</p>
                    <p className="text-gray-500">This ipo will be game changer land it in region This ipo will be game changer land it in region This ipo will be game changer land This ipo will be game changer land</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <p className="text-gray-500">Add Tags :</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">study-group</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">share-insight</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2">help-question</p>
                        <p className="text-gray-500 rounded-2xl bg-gray-200 px-2 cursor-pointer">+ More Tags</p>
                    </div>
                    <div className="flex gap-3 md:gap-5 text-gray-500 mt-5">
                        <p className="flex gap-3 items-center  text-black"><BiMessageDots /> 28 Replies</p>
                        <p className="flex gap-3 items-center"><FaEye /> 875 views</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
