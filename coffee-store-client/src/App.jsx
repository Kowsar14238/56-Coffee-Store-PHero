import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/Pages/CoffeeCard";

function App() {
  //Step 14: Show the loading data
  const coffees = useLoaderData();

  return (
    <>
      <h1>Coffee Store {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          // Step 14:
          coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} />
          ))
        }
      </div>
    </>
  );
}

export default App;
