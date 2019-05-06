import React from "react";

class ActivityItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  const;

  render() {
    const activity = this.props.activity;

    return (
      <div className="activity-item">
        <i class="fas fa-user avatar" />

        <div class="activity">
          <span className="time">{activity.timestamp}</span>
          <p>{activity.text}</p>
        </div>

        <div class="comment-count">
          <span>{activity.comments.length}</span>
          <i class="fas fa-comment" />
        </div>
      </div>
    );
  }
}

export default ActivityItem;
