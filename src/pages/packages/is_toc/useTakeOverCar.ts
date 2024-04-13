import { IS_MST, PacketType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";

export const useTakeOverCar = () => {
    useOnPacket(PacketType.ISP_TOC, (packet, inSim): void => {
        inSim.send(new IS_MST({ Msg: `/msg Initialize ISP_TOC` }));
    });
};