import Header from "./components/Header"
import JobCard from "./components/JobCard"
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Jobdata from "./Jobdata"

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar />
      {Jobdata.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App
