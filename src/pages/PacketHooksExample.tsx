import { IS_MST, PacketType } from 'node-insim/packets';
import { useOnConnect, useOnPacket } from 'react-node-insim';

export const PacketHooksExample = () => {
  useOnConnect((packet, inSim) => {
    console.log(`Connected to LFS ${packet.Product} ${packet.Version}`);
    inSim.send(new IS_MST({ Msg: `/msg InSim connected` }));
  });

  useOnPacket(PacketType.ISP_NCN, (packet) => {
    console.log(`New connection: ${packet.UName} (UCID ${packet.UCID})`);
  });

  return null;
};