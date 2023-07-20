import { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [meetings, setMeetings] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{meetings.length} Meetings today</h3>
        <List meetings={meetings} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setMeetings([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
