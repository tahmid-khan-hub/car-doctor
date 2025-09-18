"use client"
import { useSession } from "next-auth/react";
import React from "react";

const CheckoutForm = ({ data }) => {
  const session = useSession();

  const handleConfirmOrder = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const amount = form.amount.value;
    const address = form.address.value;
    const message = form.message.value;

    const formData = {
        // user data
        user_name: name,
        email: email,
        user_phone: phone,
        user_address: address,

        // form 
        date: date,
        message: message,

        // info
        service_id: data._id,
        service_name: data.title,
        service_price: data.price,
        service_img: data.img
    }

    const res = await fetch(`http://localhost:3000/api/service`, {
        method: "POST",
        body: JSON.stringify(formData)
    })

    const postedRes = await res.json();
  }
  return (
    <div>
      <form onSubmit={handleConfirmOrder} className="mt-6 space-y-4 bg-white shadow-md rounded-xl p-6">
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
            value={data?.price || ""}
            readOnly
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
            placeholder="Enter your address"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
