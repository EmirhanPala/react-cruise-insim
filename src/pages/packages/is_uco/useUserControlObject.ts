import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const useUserControlObject = () => {
    useOnPacket(PacketType.ISP_UCO, (packet, inSim): void => {
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_UCO` }));
    });
};