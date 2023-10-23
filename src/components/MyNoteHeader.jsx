import React from "react";

function MyNotHeader({ onSearch }) {
    return (
        <header className="myNote-header">
            <h1 className="myNote-header__title">My Note</h1>
            <input type="text" placeholder="Cari catatan..." onChange={(event)=> onSearch(event.target.value)}/>
        </header>
    );
}

export default MyNotHeader;