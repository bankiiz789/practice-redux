import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserById, editUser } from "../reducer/user/userSlice";

function UserEdit() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const handleSave = async () => {
    await dispatch(editUser(userData));
    navigate("/user");
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center h-screen">
      <div>
        <p>Name</p>
        <input
          className="border border-black rounded-md p-2"
          type="name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="enter your name"
        />
      </div>
      <div>
        <p>Email</p>
        <input
          className="border border-black rounded-md p-2"
          value={userData.email}
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="enter your email"
        />
      </div>
      <div>
        <p>Phone number</p>
        <input
          className="border border-black rounded-md p-2"
          value={userData.number}
          onChange={handleChange}
          name="number"
          type="phone"
          placeholder="enter your Phone number"
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="border-2 border-green-200 p-2 rounded-md"
        >
          Save
        </button>
        <button className="border-2 border-red-200 p-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UserEdit;
