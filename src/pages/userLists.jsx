import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../reducer/user/userSlice";
import { Link } from "react-router-dom";
function UserLists() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="w-full h-screen justify-between">
      <h1 className="font-bold text-center p-4">User List</h1>
      <Link
        to="/user/create"
        className="ml-[2rem] border-2 border-green-200 p-2 rounded-md "
      >
        Create User
      </Link>
      <div className="flex w-full py-2 px-4 items-center border-b-2 flex-col">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="w-full flex justify-between p-4 border-b-2"
            >
              <div className="">
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Phone : {user.number}</p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`/user/${user.id}`}
                  className="border-2 border-blue-200 rounded-lg px-4 flex justify-center items-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="border-2 border-red-200 rounded-lg px-4"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserLists;
