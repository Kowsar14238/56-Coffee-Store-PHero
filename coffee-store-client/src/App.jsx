import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/Pages/CoffeeCard";
import { useState } from "react";

function App() {
  //Step 14: Show the loading data
  const loadedCoffees = useLoaderData();
  //Step 21: When delete a Coffee it will automatically remove from UI
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1>Coffee Store {loadedCoffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          // Step 14:
          loadedCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}//Step 21
              setCoffees={setCoffees}//Step 21
            />))
        }
      </div>
    </>
  );
}

export default App;
