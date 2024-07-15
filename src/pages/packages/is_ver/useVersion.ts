import { IS_MST, IS_TINY, PacketType, TinyType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const useVersion = () => {
    useOnPacket(PacketType.ISP_VER, (packet, inSim): void => {
        inSim.send(new IS_TINY({ SubT: TinyType.TINY_ISM, ReqI: 255 }));
        inSim.send(new IS_TINY({ SubT: TinyType.TINY_SST, ReqI: 255 }));
        inSim.send(new IS_TINY({ SubT: TinyType.TINY_NCI, ReqI: 255 }));
        inSim.send(new IS_TINY({ SubT: TinyType.TINY_AXI, ReqI: 255 }));


        inSim.send(new IS_MST({ Msg: `/msg ${""} InSim System Version ${0}` }));
        inSim.send(new IS_MST({ Msg: `/msg Init complate, have fun.` }));
    });
};