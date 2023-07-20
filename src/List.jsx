import React from "react";
import Meeting from "./Meeting";

const List = ({ meetings }) => {
  return (
    <section>
      {meetings.map((meeting) => {
        return <Meeting key={meeting.id} {...meeting} />;
      })}
    </section>
  );
};

export default List;
