import React, { useState, useEffect } from "react";

// - Used only for example purposes.
const ChatAPI = {
  subscribeToFriendStatus: function(id, event) {
    console.log("Subscribed to friend status");
  },
  unsubscribeFromFriendStatus: function(id, event) {
    console.log("Unsubscribed from friend status");
  },
};

function UseEffectWithCleanupExample() {
  // - Would normally be passed down through props.friend.id or similar.
  const friendId = 1;

  const [isOnline, setIsOnline] = useState(false);

  // - If your effect returns a function, React will run this when it's time to clean up.
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    // - Specify what happens AFTER EACH render and re-render.
    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);

    // I M P O R T A N T   C L E A N U P   C O D E
    // - Returning a function is an optional mechanism for cleaning up after effects.
    // - In this example, this lets us keep the logic for subscribing and
    // unsubscribing close to one another.
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  });

  function renderIsLoading() {
    return (
      <div>
        <h3>useEffect example: (with clean up)</h3>
        <div>Loading...</div>
      </div>
    );
  }

  function renderStatus() {
    return (
      <div>
        <h3>useEffect example: (with clean up)</h3>
        <div>{isOnline ? "Online" : "Offline"}</div>
      </div>
    );
  }

  if (isOnline === null) {
    return renderIsLoading();
  } else {
    return renderStatus();
  }
}

export default UseEffectWithCleanupExample;
