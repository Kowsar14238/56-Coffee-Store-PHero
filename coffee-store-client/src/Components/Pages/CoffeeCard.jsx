//Step 14-card: Coffee Card
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photos } = coffee;

  //Step 15: Delete operation
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              // Update the state to remove the deleted coffee from the UI
              setCoffees((prevCoffees) => prevCoffees.filter((cof) => cof._id !== _id));
            } else {
              Swal.fire("Error", "Coffee could not be deleted.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting coffee:", error);
            Swal.fire("Error", "There was an error deleting the coffee.", "error");
          });
      }
    });
  };
  
  //Step 15: end

  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] p-2">
        <figure className="flex justify-center items-center py-2 px-2">
          <img src={photos} alt="coffee" />
        </figure>
        <div className="flex w-full justify-between items-center ">
          <div className="grid grid-rows-1 gap-2">
            <p>
              <span className="font-bold">Name: </span>
              {name}
            </p>
            <p>
              <span className="font-bold">Chef: </span>
              {chef}
            </p>
            <p>
              <span className="font-bold">Price: </span>
              {price}
            </p>
          </div>
          <div className="card-actions justify-end">
            <ul className="menu rounded-box gap-2">
              <li>
                <a
                  className="tooltip tooltip-right bg-[#D2B48C] text-white"
                  data-tip="View" aria-label="View coffee details"
                >
                  <FaEye />
                </a>
              </li>
              <li>
                <Link
                  to={`update-coffee/${_id}`}
                  className="tooltip tooltip-right bg-[#3C393B] text-white"
                  data-tip="Update" aria-label="Update coffee details"
                >
                  <MdModeEditOutline />
                </Link>
              </li>
              <li>
                <a
                  onClick={() => handleDelete(_id)}
                  className="tooltip tooltip-right bg-[#EA4744] text-white"
                  data-tip="Delete" aria-label="Delete coffee"
                >
                  <MdDelete />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
