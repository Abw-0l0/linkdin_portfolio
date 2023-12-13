import Feed from "./Feed";
import Header from "./Header"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"

function App() {
  return (
    <div className="bg-white flex flex-col items-center">
      <Header/>
      <div className="flex bg-customColor pt-5 px-[165px] space-x-6">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </div>
  );
}

export default App;
