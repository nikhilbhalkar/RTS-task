

import { AiOutlineArrowRight } from "react-icons/ai";

export default function RecommendedTopics() {
    const topics = ["Programming", "Copywriting", "Productivity", "Machine learning"];

    return (
        <div className="w-full md:w-full bg-white shadow-lg p-4 rounded-md mt-6">
            <h2 className="text-lg font-semibold mb-4">Recommended topics</h2>
            <ul className="space-y-2">
                {topics.map((topic, index) => (
                    <li key={index} className="text-sm text-gray-700 flex justify-between items-center">
                        {topic}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <button className="text-orange-500 text-sm font-semibold flex items-center">
                    See more topics <AiOutlineArrowRight className="ml-1" />
                </button>
            </div>
        </div>
    );
}
