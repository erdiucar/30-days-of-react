import React from "react";
import ActivityItem from "./ActivityItem";

const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "Nate"
    },
    comments: [{ from: "Ari", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2,
      name: "Ari"
    },
    comments: [{ from: "Nate", text: "I am so jealous" }]
  }
];

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App-content">
        {activities.map(activity => (
          <ActivityItem activity={activity} />
        ))}
      </div>
    );
  }
}

export default Content;
