function EditRoom({
  roomList,
  setRoomList,
  roomIndex,
  setRoomIndex,
  statusRadio,
  setStatusRadio,
}) {
  const newRoomInfo = structuredClone(roomList);
  const room = newRoomInfo.rooms[roomIndex];
  function handleChange(event) {
    setStatusRadio(event.target.value);
  }
  function handleSubmit(event) {
    room.status = statusRadio;
    setRoomList(newRoomInfo);
    setRoomIndex(null);
    event.preventDefault();
  }

  return (
    <div className="edit-room">
      {room.name + room.id + roomIndex}
      <form onSubmit={handleSubmit}>
        <label htmlFor="radioClean">
          Clean
          <input
            type="radio"
            id="radioClean"
            value="clean"
            checked={statusRadio === "clean"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="radioDirty">
          Dirty
          <input
            type="radio"
            id="radioDirty"
            value="dirty"
            checked={statusRadio === "dirty"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="radioOccupied">
          Occupied
          <input
            type="radio"
            id="radioOccupied"
            value="occupied"
            checked={statusRadio === "occupied"}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditRoom;
