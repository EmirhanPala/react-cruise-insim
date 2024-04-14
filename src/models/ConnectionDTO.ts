import { CompCar } from "node-insim/packets";
import { helper } from "src/utils/helper";

class ConnectionDTO {
    name: string = "";
    surname: string = "";
    gender: number = 0;
    birthDate: string = "";
    userName: string = "";
    playerName: string = "";
    location: string = "";
    cash: number = 0;
    gold: number = 0;
    bankBalance: number = 0;
    totalDistance: number = 0;
    bonusBalance: number = 0;
    bonusDistance: number = 0;
    bonusLevel: number = 0;
    password: string = "";
    phoneNumber: string = "";
    phoneVerified: string = "N"; //N = No, Y = Yes
    level: number = 0;
    rank: number = 0;
    exp: number = 0;
    loginMsg: string = "";
    ipAdress: string = "";
    mailAdress: string = "";
    mailVerified: string = "N"; //N = No, Y = Yes
    startingDate: string = helper.dateTimeNow();
    lastLogin: string = helper.dateTimeNow();
    lastExit: string = helper.dateTimeNow();
    securityQuestion: number = 0;
    securityQuestionAnswer: string = "";
    compCar: CompCar = new CompCar();
};
export default ConnectionDTO;