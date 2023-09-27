import Card from "./component/Card"
import Navbar from "./component/Navbar"

function App() {

  const apiData = [
    {
      name: "Ashik",
      age: 23,
      employee: "Robi"
    },
    {
      name: "Nahid",
      age: 20,
      employee: "GrameenPhone"
    },
    {
      name: "Sujon",
      age: 25,
      employee: "Banglalink"
    },
    {
      name: "Ayman",
      age: 28,
      employee: "10 mins School"
    },

  ]

  return (
    <div>
      <Navbar />
      {
        apiData.map(single =>
          <Card cardInfo={single} anotherData={"hello"}  ></Card>)
      }
    </div>
  )
}
export default App
