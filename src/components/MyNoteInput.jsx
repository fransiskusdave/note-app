import React from "react";

class MyNoteInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: "",
            body: ""
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <article className="myNote-input">
                <h2>Buat Catatan</h2>
                <hr />
                <form action="" onSubmit={this.onSubmitEventHandler}>
                    <input type="text" placeholder="Judul" onChange={this.onTitleChangeEventHandler}/>
                    <textarea placeholder="Tuliskan catatanmu disini..." cols="30" rows="10" onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </article>
        );
    }
}

export default MyNoteInput;