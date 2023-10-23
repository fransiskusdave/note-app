import React from "react";
import { showFormattedDate} from "../utils/index"

function MyNoteItemBody({ title, body, createdAt }) {
    return (
        <div className="myNote-item__body">
            <h3 className="myNote-item__title">{title}</h3>
            <p className="myNote-item__date">{showFormattedDate(createdAt)}</p>
            <p className="myNote-item__text">{body}</p>
        </div>
    );
}

export default MyNoteItemBody;