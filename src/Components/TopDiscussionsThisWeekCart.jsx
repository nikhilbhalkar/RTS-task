

import { AiOutlineArrowRight } from "react-icons/ai";

export default function TopDiscussionsThisWeek() {
    const discussions = [
        { title: "Share your best study habits or learn from others!", details: "How do you stay focused during study sessions?" },
        { title: "Seek feedback on your recent assignment.", details: "Share the challenges you faced and ask for suggestions for improvement." },
        { title: "Recommend and discuss a book or article related to the course material.", details: "What insights did you gain?" },
    ];

    return (
        <div className="w-full md:w-full bg-white shadow-lg p-4 rounded-md md:h-fit">
            <h2 className="text-lg font-semibold mb-4">Top discussion this week 🔥</h2>
            <ul className="space-y-4">
                {discussions.map((discussion, index) => (
                    <li key={index} className="border-b pb-4">
                        <h3 className="text-sm font-medium">{discussion.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{discussion.details}</p>
                        <button className="text-orange-500 text-sm font-semibold flex items-center">
                            Details <AiOutlineArrowRight className="ml-1" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
