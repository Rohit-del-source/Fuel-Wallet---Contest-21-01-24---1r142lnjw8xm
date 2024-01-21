import React from "react";

function Users({ users, dispatch, setBalance, balance }) {
    console.log(users);

    function handleFuel() {
        if(balance > 50){
            dispatch({ type: "fuel", setBalance, balance });
            setBalance(balance -50);
        }
        
    }
    return (
        <div>
            <button onClick={() => handleFuel()} id="fill-fuel">
                Fill Fuel
            </button>
            {users.map((user) => {
                return (
                    <div key={user.id} class="user">
                        {user.name}
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
