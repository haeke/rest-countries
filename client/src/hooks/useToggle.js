import { useState } from "react";

// share a boolean and method for toggling the state of the boolean, the boolean value is set to false initially.

function useToggle(initialOn = false) {
  const [on, setOn] = useState(initialOn);
  const toggle = () => setOn(!on);
  return {
    on,
    toggle
  };
}

export default useToggle;
