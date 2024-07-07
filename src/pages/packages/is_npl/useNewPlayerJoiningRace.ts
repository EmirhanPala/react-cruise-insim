import { IS_MST, PacketType } from "node-insim/packets";
import { useConnections, useOnPacket } from "react-node-insim";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { userInfoSlice } from "src/store/userSlice";

export const useNewPlayerJoiningRace = () => {
    const users = useConnections();

    const userInfo = useAppSelector(s => s.userInfo);
    const dispatch = useAppDispatch();
    useOnPacket(PacketType.ISP_NPL, (packet, inSim): void => {
        const user = users.get(packet.UCID);
        dispatch(userInfoSlice.actions.setActiveRow({
            ...userInfo.activeRow,
            ucid: packet.UCID,
            plid: packet.PLID,
        }));
        if (user?.UCID === packet.UCID) {
            inSim.send(new IS_MST({ Msg: `/msg ${packet.PName} ^7& ${packet.CName}` }));
            dispatch(userInfoSlice.actions.setActiveRow({
                ...userInfo.activeRow,
                ucid: packet.UCID,
                plid: packet.PLID,
                pName: packet.PName,
                car: packet.CName,
                ir: packet.H_TRes,
                am: packet.H_Mass,
            }));
        }
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_NPL` }));
    });
};