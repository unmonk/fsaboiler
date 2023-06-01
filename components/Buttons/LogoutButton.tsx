"use client";
import { signOut } from "next-auth/react";
export const LogoutButton = () => {
  return (
    <button
      className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      Sign Out
    </button>
  );
};
