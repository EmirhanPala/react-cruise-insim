import { IS_MST, PacketType, UserType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";
import { helper } from "src/utils/helper";

export const useMessagesOut = () => {
    useOnPacket(PacketType.ISP_MSO, (packet, inSim): void => {
        if (packet.UserType === UserType.MSO_PREFIX) {
            const message = helper.removeInSimColorCodes(packet.Msg);
            const commandParts = message.split(':');
            const commandAndArgs = commandParts[1].trim().split(' ');
            const command = commandAndArgs[0];
            const args = commandAndArgs.slice(1);

            switch (command) {
                case "!help":
                    inSim.send(new IS_MST({ Msg: `/msg React Insim MSO ${args}` }));
                    inSim.send(new IS_MST({ Msg: `/msg Message ${message}` }));
                    inSim.send(new IS_MST({ Msg: `/msg commandParts ${commandParts}` }));
                    inSim.send(new IS_MST({ Msg: `/msg commandAndArgs ${commandAndArgs}` }));
                    inSim.send(new IS_MST({ Msg: `/msg command ${command}` }));
                    inSim.send(new IS_MST({ Msg: `/msg args ${args}` }));
                    break;
                default:
                    inSim.send(new IS_MST({ Msg: `/msg Invalid Command. ^2!help ^7for help.` }));
                    break;
            }
        }
    });
};