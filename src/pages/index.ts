import { useMessagesOut, useMultiCarInfo } from "./packages";

export const Packages = () => {
    useMultiCarInfo();
    useMessagesOut();
    return null;
};