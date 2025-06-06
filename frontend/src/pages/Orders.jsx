import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

// function to generate a random future date
const getRandomFutureDate = () => {
  const currentDate = new Date();
  const daysToAdd = Math.floor(Math.random() * 30) + 1; // Random number of days between 1 and 30
  const futureDate = new Date(
    currentDate.setDate(currentDate.getDate() + daysToAdd)
  ); // Add random days
  const options = { year: "numeric", month: "long", day: "numeric" };
  return futureDate.toLocaleDateString("en-US", options); // Return the formatted future date
};

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {
          // Slicing the products and mapping over them
          products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p className="text-lg">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2">
                    Date:{" "}
                    <span className="text-gray-400">
                      {getRandomFutureDate()}
                    </span>{" "}
                    {/* Random future date */}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">Ready to ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;
