import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";
import { useAppDispatch, useAppSelector } from "src/hooks/hooks";
import { userInfoSlice } from "src/store/userSlice";

export const useNewConn = () => {
    const userInfo = useAppSelector(s => s.userInfo);
    const dispatch = useAppDispatch();

    useOnPacket(PacketType.ISP_NCN, (packet, inSim): void => {
        dispatch(userInfoSlice.actions.setActiveRow({
            ...userInfo.activeRow,
            ucid: packet.UCID,
            pName: packet.PName,
            uName: packet.UName,
        }));
        inSim.send(new IS_MST({ Msg: `/msg  Initialize ISP_NCN` }));
    });
};