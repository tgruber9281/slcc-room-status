import rooms from "./rooms.json";
import "./roomStyling.css"

let roomList = rooms.rooms;

function RoomList() {
  return (
    <div className="rooms">
      {roomList.map(room => {
        return (
          <div key={room.id} className={"room-"+room.status} id={room.id+"-room"}>
            {room.name} is {room.status}
            <div className="roomStaff">Staff in room: {room.staff}</div>
            <div className="roomApptType" id={room.id+"roomApptType"}>{room.apptType}</div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomList;
