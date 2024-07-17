//Step 14-card: Coffee Card
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, price, photos } = coffee;

  //Step 15: Delete operation
  const handleDelete = (_id) => {
    console.log(_id);

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
        // console.log("Confirm");
        //Step 17: Confirm Delete operation
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
          //Step 17: end
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
                  data-tip="View"
                >
                  <FaEye />
                </a>
              </li>
              <li>
                <a
                  className="tooltip tooltip-right bg-[#3C393B] text-white"
                  data-tip="Update"
                >
                  <MdModeEditOutline />
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleDelete(_id)}
                  className="tooltip tooltip-right bg-[#EA4744] text-white"
                  data-tip="Delete"
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
