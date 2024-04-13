import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const usePlayerLeaveRace = () => {
    useOnPacket(PacketType.ISP_PLL, (packet, inSim): void => {
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_PLL` }));
    });
};