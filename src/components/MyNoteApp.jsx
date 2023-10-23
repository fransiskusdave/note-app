import React from "react";
import { getInitialData } from "../utils";
import MyNoteHeader from "./MyNoteHeader";
import MyNoteInput from "./MyNoteInput";
import MyNoteArchiveList from "./MyNoteArchiveList";
import MyNoteList from "./MyNoteList";

class MyNoteApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onMoveNoteHandler = this.onMoveNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({ notes });
    }

    onMoveNoteHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id ? {...note, archived: !note.archived} : note);
        this.setState({ notes });   
    }

    onSearchNoteHandler(search) {
        if (search.trim() === "") {
            this.setState({ notes: getInitialData() });
        } else {
            const filteredNotes = this.state.notes.filter((notes) => {
                return notes.title.toLowerCase().includes(search.toLowerCase())
            });
            this.setState({ notes: filteredNotes })
        }
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="myNoteApp">
                <MyNoteHeader onSearch={this.onSearchNoteHandler}/>
                <MyNoteInput addNote={this.onAddNoteHandler} />
                <MyNoteList notes={this.state.notes.filter((note) => note.archived === false)} onDelete={this.onDeleteNoteHandler} onMove={this.onMoveNoteHandler} />
                <MyNoteArchiveList notes={this.state.notes.filter((note) => note.archived === true)} onDelete={this.onDeleteNoteHandler} onMove={this.onMoveNoteHandler} />
            </div>
        );
    }
}

export default MyNoteApp;