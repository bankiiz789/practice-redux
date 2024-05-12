import React, { useState } from "react";
import { createUser } from "../reducer/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleCreateUser = async () => {
    await dispatch(createUser(newUser));
    navigate("/user");
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center h-screen">
      <div>
        <p>Name</p>
        <input
          className="border border-black rounded-md p-2"
          type="name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
      </div>
      <div>
        <p>Email</p>
        <input
          className="border border-black rounded-md p-2"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
      </div>
      <div>
        <p>Phone number</p>
        <input
          className="border border-black rounded-md p-2"
          type="phone"
          name="number"
          value={newUser.number}
          onChange={handleChange}
          placeholder="enter your Phone number"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleCreateUser}
          className="border-2 border-green-200 p-2 rounded-md"
        >
          Create
        </button>
        <button
          onClick={() => navigate("/user")}
          className="border-2 border-red-200 p-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UserCreate;
