import { useEffect } from "react";
export const FiveTimers = () => {

    useEffect(() => {
        const interval = setInterval(() => {
            //Can a timer like this be used for activities such as earning cruise money and similar events?
        }, 5000);
        return () => clearInterval(interval);
    }, []);
};