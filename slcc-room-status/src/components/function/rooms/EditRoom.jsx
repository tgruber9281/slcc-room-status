function EditRoom({ roomList, setRoomList, roomIndex }) {
  const newRoomInfo = structuredClone(roomList);
  return (
    <div className="edit-room">
      <p>
        {newRoomInfo.rooms[roomIndex].name +
          newRoomInfo.rooms[roomIndex].id +
          roomIndex}
      </p>
    </div>
  );
}

export default EditRoom;
