import React from "react";

function MoveButton({ id, onMove, isArchive }) {
    return (
        <button className="myNote-item__move" onClick={() => onMove(id)}>
            {isArchive ? "Pindahkan" : "Arsip"}
        </button>
    );
}

export default MoveButton;