import { IS_MST, PacketType, UserType } from "node-insim/packets";
import { useOnPacket } from "react-node-insim";
import { useAppSelector } from "src/hooks/hooks";
import { distanceDigits, moneyCurrency, moneyDigits } from "src/types";
import { helper } from "src/utils/helper";

export const useMessagesOut = () => {
    const userInfo = useAppSelector(s => s.userInfo);
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
                case "!show":
                    inSim.send(new IS_MST({ Msg: `/msg Person: ^7${userInfo.activeRow.pName} ^7(${userInfo.activeRow.uName}^7)` }));
                    inSim.send(new IS_MST({ Msg: `/msg Cash: ^3${moneyCurrency}${helper.formatNumber(0, moneyDigits)} ^9Dist: ^3${helper.formatNumber(0, distanceDigits)}km` }));
                    inSim.send(new IS_MST({ Msg: `/msg Garage: ^3${helper.formatNumber(0, moneyDigits)}m2` }));
                    inSim.send(new IS_MST({ Msg: `/msg Level: ^3${1} ^1(${"RankNone"}) ^2XP: ${0}/${1000}` }));
                    inSim.send(new IS_MST({ Msg: `/msg Cars: ^3${""}` }));
                    break;
                default:
                    inSim.send(new IS_MST({ Msg: `/msg Invalid Command. ^2!help ^7for help.` }));
                    break;
            }
        }
    });
};