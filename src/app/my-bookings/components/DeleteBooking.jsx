"use client";
import React from "react";

const DeleteBooking = ({id}) => {
    const handleDelete = async(id) => {
        const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();
    }
  return (
    <button onClick={() => handleDelete(id)} className="btn btn-sm btn-circle btn-ghost text-red-500">
      <FaTimes size={20} />
    </button>
  );
};

export default DeleteBooking;
