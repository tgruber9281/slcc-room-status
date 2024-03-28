import { useState } from "react";
import Header from "./components/display/header";
import RoomList from "./components/function/rooms/Rooms";
import EditRoom from "./components/function/rooms/EditRoom";

import roomJSON from "./components/function/rooms/rooms.json";
import "./App.css";

function App() {
  const [roomList, setRoomList] = useState(roomJSON);
  const [roomIndex, setRoomIndex] = useState(null);

  return (
    <>
      <Header />
      <div className="rooms-container">
        <RoomList
          roomList={roomList}
          setRoomIndex={setRoomIndex}
        />
        {roomIndex !== null ? (
          <EditRoom
            roomList={roomList}
            setRoomList={setRoomList}
            roomIndex={roomIndex}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
