

import { Avatar } from '@material-tailwind/react';
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function PeopleToFollow() {
    const people = [
        { name: "Mikey Jonah", description: "Talks about design & productivity", avatar: "https://docs.material-tailwind.com/img/face-2.jpg" },
        { name: "Mikey Jonah", description: "Talks about design & productivity", avatar: "https://docs.material-tailwind.com/img/face-2.jpg" },
        { name: "Mikey Jonah", description: "Talks about design & productivity", avatar: "https://docs.material-tailwind.com/img/face-2.jpg" },
       
    ];

    return (
        <div className="w-full md:w-full bg-white shadow-lg p-4 rounded-md mt-6">
            <h2 className="text-lg font-semibold mb-4">People to follow</h2>
            <ul className="space-y-4">
                {people.map((person, index) => (
                    <li key={index} className="flex items-center">
                        <Avatar src={person.avatar} alt="avatar" size="sm" />
                        <div className="ml-3">
                            <p className="text-sm font-semibold">{person.name}</p>
                            <p className="text-sm text-gray-500">{person.description}</p>
                        </div>
                        <button className="ml-auto flex items-center text-orange-500 text-sm font-semibold border-2 border-orange-500 p-1 rounded-xl">
                            Follow
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-4 ">
                <a href="#" className="text-sm font-semibold text-orange-500 hover:underline">
                    See more suggestions
                </a>
            </div>
        </div>
    );
}
