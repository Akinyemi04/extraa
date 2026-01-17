"use client";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import Input from "./Input";

interface props {
  cancelPopup: () => void;
}

const ALL_PERMISSIONS = [
  "Add Functions",
  "View Accommodation",
  "Edit User",
  "Add User",
  "Auditing",
  "Delete User",
  "View User",
  "Join Us",
  "Explore",
  "Add Role",
  "Remove Role",
  "Edit Function",
  "Remove Function",
  "Add Function to Role",
  "Remove Function from Role",
  "Add Occupation",
  "Add Interest",
  "Remove Interest",
  "Manage Newsletters",
];

const Popup = ({ cancelPopup }: props) => {
  const [roleName, setRoleName] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [empty, setEmpty] = useState(false);

  const availablePermissions = ALL_PERMISSIONS.filter(
    (p) => !selectedPermissions.includes(p)
  );

  const addPermission = (permission: string) => {
    if (!selectedPermissions.includes(permission)) {
      setSelectedPermissions([...selectedPermissions, permission]);
    }
  };

  const removePermission = (permission: string) => {
    setSelectedPermissions(selectedPermissions.filter((p) => p !== permission));
  };
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center  bg-black/40">
      <section className="bg-white rounded-xl p-4 w-153.75">
        <header className="flex justify-between items-center  mb-1">
          <h3 className={`test font-medium text-[24px]`}>Add New Role</h3>
          <span
            onClick={cancelPopup}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-100 ease-in-out"
          >
            {" "}
            <CloseIcon className="h-3.5 w-3.5 cursor-pointer" />{" "}
          </span>
        </header>
        <p className="text-[14px] text-[#00000099] font-inter">
          Enter Role name and set Permissions for the role
        </p>
        <Input
          id="role"
          empty={empty}
          label="Role Name"
          value={roleName}
          onChange={(e) => {
            setRoleName(e.target.value);
            setEmpty(false);
          }}
        />
        {empty && (
          <p className="text-red-500 text-[12px] ml-1 -mt-2">
            Role name cannot be empty
          </p>
        )}

        <h6 className={`test text-[15px] mt-2 font-medium my-3`}>
          Permissions
        </h6>
        <div className="flex flex-wrap gap-2 bg-[#3636361A] p-3 mb-4  rounded-xl font-medium">
          {selectedPermissions.map((permission) => (
            <span
              key={permission}
              className="flex items-center  rounded-md bg-white px-2 py-1 text-sm shadow text-[12px]"
            >
              {permission}
              <button
                className="scale-80 cursor-pointer"
                onClick={() => removePermission(permission)}
              >
                <CloseIcon className="h-2 w-2 text-[#C92D0A] scale-80" />
              </button>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 max-w-fit">
          {availablePermissions.map((permission) => (
            <button
              key={permission}
              onClick={() => addPermission(permission)}
              className="flex items-center font-medium rounded-md border px-2 py-1 text-[12px] cursor-pointer border-[#3636361A] hover:opacity-80 transition-opacity duration-100 ease-in-out "
            >
              {permission}

              <AddIcon className="h-2 w-2 text-[#1A7D36] scale-80" />
            </button>
          ))}
        </div>
        <footer className="flex items-center justify-end gap-3 my-2">
          <button
            onClick={cancelPopup}
            className="p-2 text-[#000130] btn border border-[#D0D5DD]"
          >
            {" "}
            Cancel
          </button>
          <button
            onClick={() => {
              setEmpty(!roleName.trim());
            }}
            className="p-2 bg-[#000130] text-white btn"
          >
            Add new role
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Popup;
