import React from "react";
import MyNoteItemBody from "./MyNoteItemBody";
import DeleteButton from "./DeleteButton";
import MoveButton from "./MoveButton";

function MyNoteItem({ title, body, createdAt, id, onDelete, onMove, isArchive }) {
    return (
        <div className="myNote-item">
            <MyNoteItemBody title={title} createdAt={createdAt} body={body} />
            <DeleteButton id={id} onDelete={onDelete} />
            <MoveButton id={id} onMove={onMove} isArchive={isArchive} />
        </div>
    );
}

export default MyNoteItem;