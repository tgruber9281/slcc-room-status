import "./roomStyling.css";

function RoomList({ roomList, setRoomIndex }) {
  return (
    <>
      <div className="rooms">
        {roomList.rooms.map((data, index) => {
          return (
            <div
              key={data.id}
              className={"room-" + data.status}
              id={data.id + "-room"}
              onClick={() => setRoomIndex(index)}
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
    </>
  );
}

export default RoomList;
