import React, { useState } from "react";

function AddUser({ dispatch, setBalance, balance }) {
    const [name, setName] = useState("");

    function handleClick(e) {
        e.preventDefault();
        const id = uuidv4();
         dispatch({ type: "add", name, setBalance, balance });
         setBalance(balance +10);
        setName("");
    }

    return (
        <form>
            <label htmlFor="name">Enter the Name:</label>
            <input
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                value={name}
            />
            <button onClick={handleClick} id="add-user-button">
                Add User
            </button>
        </form>
    );
}

export default AddUser;
