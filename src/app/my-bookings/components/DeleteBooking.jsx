"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteBooking = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
  };
  return (
    <button
      onClick={() => handleDelete(id)}
      className="btn btn-sm btn-circle btn-ghost text-red-500"
    >
      <FaTimes size={20} />
    </button>
  );
};

export default DeleteBooking;
