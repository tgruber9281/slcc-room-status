import { useEffect, useState } from "react";
import Header from "./components/display/header";
import RoomList from "./components/function/rooms/Rooms";
import EditRoom from "./components/function/rooms/EditRoom";

// import roomJSON from "./components/function/rooms/rooms.json";
import "./App.css";

function App() {
  const [roomList, setRoomList] = useState();
  const [roomIndex, setRoomIndex] = useState(null);
  const [statusRadio, setStatusRadio] = useState(null);

  useEffect(() => {
    const url = "./src/components/function/rooms/rooms.json";

    // https://api.jsonserve.com/tvLVba

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setRoomList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="rooms-container">
        {roomList && (
          <RoomList
            roomList={roomList}
            roomIndex={roomIndex}
            setRoomIndex={setRoomIndex}
            setStatusRadio={setStatusRadio}
          />
        )}
        {roomIndex !== null && (
          <EditRoom
            roomList={roomList}
            setRoomList={setRoomList}
            roomIndex={roomIndex}
            setRoomIndex={setRoomIndex}
            statusRadio={statusRadio}
            setStatusRadio={setStatusRadio}
          />
        )}
      </div>
    </>
  );
}

export default App;
