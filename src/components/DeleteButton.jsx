import React from "react";

function DeleteButton({ id, onDelete }) {
    return (
        <button className="myNote-item__delete" onClick={() => onDelete(id)}>Delete</button>
    );
}

export default DeleteButton;