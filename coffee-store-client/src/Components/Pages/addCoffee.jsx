import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  //Step 8: Store input values for sending to server
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photos = form.photos.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      price,
      category,
      details,
      photos,
    };

    console.log(newCoffee);
    //Step 8: end

    //Step 10:Send data to server
    fetch("https://coffee-store-server-pi-lac.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        //Step:11-extra
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Data inserted successfully",
            icon: "success",
            confirmButtonText: "Click Here",
          });
        }
      });
    //Step:10 end
  };

  //Step 7: Design the page and add form
  return (
    <div>
      <button className="mx-2 my-5 p-2 rounded-md bg-slate-500 font-serif text-white">
        <Link to={"/"} className="flex justify-left items-center">
          <FaArrowLeft /> Home
        </Link>
      </button>
      <div>
        <div className="grid gap-6 bg-[#F4F3F0] p-6">
          <div className="">
            <h2>Add New Coffee</h2>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleAddCoffee}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="chef"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Chef
                </label>
                <input
                  type="text"
                  id="chef"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee chef"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="supplier"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  id="supplier"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee supplier"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="taste"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Taste
                </label>
                <input
                  type="text"
                  id="taste"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee taste"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee price"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee category"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="details"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Details
                </label>
                <input
                  type="text"
                  id="details"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter coffee details"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="photos"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo
                </label>
                <input
                  type="text"
                  id="photos"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter photo URL"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="text-black bg-[#D2B48C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
