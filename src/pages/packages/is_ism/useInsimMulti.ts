import { IS_TINY, PacketType, TinyType } from "node-insim/packets"
import { useOnPacket } from "react-node-insim";

export const useInsimMulti = () => {
    useOnPacket(PacketType.ISP_ISM, (packet, inSim): void => {
        if (packet.HName?.length > 0) {
            inSim.send(new IS_TINY({ SubT: TinyType.TINY_NCN, ReqI: 255 }));
            inSim.send(new IS_TINY({ SubT: TinyType.TINY_NPL, ReqI: 255 }));
        }
    });
};