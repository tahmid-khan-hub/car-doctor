"use client"
import { useSession } from "next-auth/react";
import React from "react";

const BookingUpdateForm = ({data}) => {
  const session = useSession();
  console.log(data);

  const handleUpdateBooking = async (e) => {
    e.preventDefault();

    const form = e.target;
    const phone = form.phone.value;
    const date = form.date.value;
    const address = form.address.value;

    const formData = {
      user_phone: phone,
      user_address: address,
      date: date,
    };

  };
  return (
    <div>
        <h1 className="text-center mt-5 font-bold text-3xl mb-11">Update Bookings</h1>
      <form
        onSubmit={handleUpdateBooking}
        className="mt-6 space-y-4 bg-white shadow-md rounded-xl p-6 mb-24"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={session?.data?.user?.name || ""}
            readOnly
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={session?.data?.user?.email || ""}
            readOnly
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            defaultValue={data?.user_phone}
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Due Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Due Amount
          </label>
          <input
            type="text"
            name="amount"
            defaultValue={data?.service_price || ""}
            className="w-full border rounded-lg px-4 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            defaultValue={data?.user_address}
            placeholder="Enter your address"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition mt-5"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BookingUpdateForm;
