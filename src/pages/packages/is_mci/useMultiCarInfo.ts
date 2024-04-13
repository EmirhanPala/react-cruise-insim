/* eslint-disable @typescript-eslint/no-unused-vars */
import { type CompCar, PacketType } from "node-insim/packets";
import { useOnPacket, usePlayers } from "react-node-insim";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import AS from 'src/layout/map/AS.json';
import BL from 'src/layout/map/BL.json';
import FE from 'src/layout/map/FE.json';
import KY from 'src/layout/map/KY.json';
import SO from 'src/layout/map/SO.json';
import WE from 'src/layout/map/WE.json';
import { mciSlice } from "src/store/mciSlice";
import type { PlayerId } from "src/types";

import { checkPos } from "./checkPos";

type MultiCarInfo = Record<PlayerId, CompCar>;
const multiCarInfo: MultiCarInfo = {};

const maps = {
    AS,
    BL,
    FE,
    KY,
    SO,
    WE
};

export const useMultiCarInfo = () => {
    const mci = useAppSelector(s => s.mci);
    const dispatch = useAppDispatch();
    const players = usePlayers();
    const selectedMap = "WE";
    const resources = { ...maps[selectedMap] };

    useOnPacket(PacketType.ISP_MCI, (packet, inSim): void => {
        packet.Info.forEach((m) => {
            const kmh = m.Speed / 91;
            // let mph = m.Speed / 146;
            // let direction2 = m.Direction / 180;
            const pathx = m.X / 65536;
            const pathy = m.Y / 65536;
            // let pathz = m.Z / 65536;
            // let angle = m.AngVel * 360 / 16384;
            // let heading = m.Heading * 180.0 / 32768.0;
            dispatch(mciSlice.actions.setUserSpeed(kmh));
            multiCarInfo[m.PLID] = m;
            const wayDedect = resources.WE.some((s) => {
                if (checkPos(s.X?.length, s.X, s.Y, pathx, pathy)) {
                    dispatch(mciSlice.actions.setWayName(s.name));
                    dispatch(mciSlice.actions.setSpeedLimit(s.speedLimit));
                    dispatch(mciSlice.actions.setFreePit(s.UcretsizPit));
                    return true;
                }
                return false;
            });
            dispatch(mciSlice.actions.setWayDedect(wayDedect));
            if (!wayDedect) {
                dispatch(mciSlice.actions.setWayName("^0Invalid Path ^350 km/h"));
            }
        });
    });
    return multiCarInfo;
};