
import './App.css'
import Navbar from "./Components/Navbar";
import CommunityCard from "./Components/CommunityCart";
import TopDiscussionsThisWeek from "./Components/TopDiscussionsThisWeekCart";
import RecommendedTopics from "./Components/RecommendedTopicsCart";
import PeopleToFollow from "./Components/PeopleToFollowCart";

function App() {
  
  return (
    <main >
    <Navbar />
    <div className="w-screen h-[1px] bg-gray-500"></div>

    <div className="w-screen h-0 lg:h-60 bg-custombrown absolute z-0"></div>

    <div className="flex flex-col lg:flex-row md:ml-32 md:mr-32 relative z-10 md:flex-col">
      <CommunityCard />
      <div className="flex flex-col mt-16 flex-wrap">
        <TopDiscussionsThisWeek />
        <RecommendedTopics />
        <PeopleToFollow />
      </div>
    </div>

  </main>
  )
}

export default App
