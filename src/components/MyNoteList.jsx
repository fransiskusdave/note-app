import React from "react";
import MyNoteItem from "./MyNoteItem";
import Message from "./Message";

function MyNoteList({ notes, onDelete, onMove }) {
    return (
        <article className="myNote-list">
            <h2>Catatan Aktif</h2>
            <hr />
            <section className="myNote-list__item">
                {
                    notes.length === 0 ?
                    <Message />
                    :
                    notes.map((note) => (
                        <MyNoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onMove={onMove}
                        isArchive={note.archived}
                        {...note} />
                    ))
                }
            </section>
        </article>       
    );
    
    
}

export default MyNoteList;