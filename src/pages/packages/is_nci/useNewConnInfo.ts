import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const useNewConnInfo = () => {
    useOnPacket(PacketType.ISP_NCI, (packet, inSim): void => {
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_NCI` }));
    });
};