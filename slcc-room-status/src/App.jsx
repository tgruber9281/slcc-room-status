import { useState } from "react";
import Header from "./components/display/header";
import RoomList from "./components/function/rooms/Rooms";

import "./App.css";

function App() {
  return (
    <>
        <Header />
        <div className="rooms-container">
        <RoomList />
        </div>
    </>
  );
}

export default App;
