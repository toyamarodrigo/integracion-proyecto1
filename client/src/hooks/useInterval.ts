import { useEffect, useState } from "react";
import moment from "moment";

import { TIME_FORMAT } from "../utils/constants";

// TODO: Tipados usestate
export const useInterval = () => {
  const [actualTime, setActualTime] = useState(moment().format(TIME_FORMAT));

  useEffect(() => {
    const interval = setInterval(() => {
      setActualTime(moment().format(TIME_FORMAT));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { actualTime };
};
