import { useAutoXInfo, useConnInterfaceMode, useConnLeave, useConnPlayerRename, useContactBetweenTwoCars, useGeneralPurpose, useInsimMulti, useMessagesOut, useMultiCarInfo, useNewConn, useNewConnInfo, useNewPlayerJoiningRace, useObjectHit, usePenalty, usePitStop, usePlayerLeaveRace, usePlayerPits, useStaPackage, useTakeOverCar, useUserControlObject, useVersion, useVoteNotify } from "./packages";
import { FiveTimers } from "./timers/FiveTimers";

/**
 * Initializes various packages for in-simulation multi-user interactions, car information, messaging, and more.
 * This function acts as a central point to activate multiple hooks or middleware functions that handle different
 * aspects of a racing simulation environment, such as new connections, player actions (joining, leaving, pitting),
 * car interactions, and general event notifications. It ensures that all necessary functionalities are loaded and
 * ready to be used in the simulation context. The function returns null as it primarily serves to initialize side effects.
*/
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
    FiveTimers();
    return null;
};