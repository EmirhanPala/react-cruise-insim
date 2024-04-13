import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const useConnPlayerRename = () => {
    useOnPacket(PacketType.ISP_CPR, (packet, inSim): void => {
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_CPR` }));
    });
};