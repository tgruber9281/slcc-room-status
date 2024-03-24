import rooms from "./rooms.json";
import { useState } from "react";
import "./roomStyling.css";

function RoomList() {
  function handleRoomClick(index) {
    setRoomToEdit(index);
  }

  const [roomList, setRoomList] = useState(rooms.rooms);
  const [roomToEdit, setRoomToEdit] = useState(null);
  const editRoom = () => {
    if (roomToEdit !== null) {
      return (
        <>
          <p>{roomList[roomToEdit].name}</p>
          
        </>
      );
    }
  };

  return (
    <>
      <div className="rooms">
        {roomList.map((data, index) => {
          return (
            <div
              key={data.id}
              className={"room-" + data.status}
              id={data.id + "-room"}
              onClick={() => handleRoomClick(index)}
            >
              {data.name} is {data.status}
              <div className="roomStaff">Staff in room: {data.staff}</div>
              <div className="roomApptType" id={data.id + "roomApptType"}>
                {data.apptType}
              </div>
            </div>
          );
        })}
      </div>

      <div className="edit-room">{editRoom()}</div>
    </>
  );
}

export default RoomList;
