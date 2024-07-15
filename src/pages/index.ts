import { useAutoXInfo, useConnInterfaceMode, useConnLeave, useConnPlayerRename, useContactBetweenTwoCars, useGeneralPurpose, useInsimMulti, useMessagesOut, useMultiCarInfo, useNewConn, useNewConnInfo, useNewPlayerJoiningRace, useObjectHit, usePenalty, usePitStop, usePlayerLeaveRace, usePlayerPits, useStaPackage, useTakeOverCar, useUserControlObject, useVersion, useVoteNotify } from "./packages";

export const Packages = () => {
    useInsimMulti();
    useMultiCarInfo();
    useMessagesOut();
    useNewConn();
    useVersion();
    useStaPackage();
    useNewConnInfo();
    useNewPlayerJoiningRace();
    usePlayerPits();
    usePlayerLeaveRace();
    useTakeOverCar();
    useConnPlayerRename();
    useConnInterfaceMode();
    useAutoXInfo();
    useGeneralPurpose();
    useContactBetweenTwoCars();
    usePitStop();
    usePenalty();
    useUserControlObject();
    useVoteNotify();
    useConnLeave();
    useObjectHit();
    return null;
};