import React from "react";
import { FaTimes } from "react-icons/fa";

const MyBookingsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full border border-gray-100 rounded-2xl shadow-md">
        <tbody>
          {data?.map((item) => (
            <tr key={item._id} className="hover">
              {/* Cross / Delete button */}
              <td>
                <button className="btn btn-sm btn-circle btn-ghost text-red-500">
                  <FaTimes size={20}/>
                </button>
              </td>

              {/* Service image */}
              <td>
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img
                    src={item.service_img}
                    alt={item.service_name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </td>

              {/* Title */}
              <td className="font-semibold">{item.service_name}</td>

              {/* Price */}
              <td className="text-green-600 font-medium">
                ${item.service_price}
              </td>

              {/* Date */}
              <td className="text-gray-500">{item.date}</td>

              {/* Status Button */}
              <td>
                <button className="btn btn-sm btn-warning">Pending</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingsTable;
