import React from 'react';
import { Button, Flex, useConnections } from 'react-node-insim';
import { useAppSelector } from 'src/hooks/hooks';
import { translate } from 'src/i18n/translate';
import { distanceDigits, moneyCurrency, moneyDigits, serverName } from 'src/types';
import { helper } from 'src/utils/helper';

const translatePath = "apps|dashboard";
export const Dashboard = () => {
    const users = useConnections();
    const userInfo = useAppSelector(s => s.userInfo.activeRow);
    const mciState = useAppSelector(s => s.mci);
    const user = users.get(userInfo.ucid);
    return (
        <React.Fragment key={"Flex-1"}>
            {userInfo.ucid === user?.UCID && (
                <>
                    <Flex
                        top={84}
                        left={169}
                        width={27}
                        alignItems="center"
                        background="dark"
                        backgroundColor="light"
                        UCID={255}
                        padding={1}
                        direction="column"
                    >
                        <Button width={25} height={4} align="left">{serverName}</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Money")}: ^3{`${moneyCurrency}${helper.formatNumber(userInfo.money, moneyDigits)}`}</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Bonus")}: ^3{`${moneyCurrency}${helper.formatNumber(userInfo.bonus, moneyDigits)}`} ({`${userInfo.bonusLevel}`})</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Distance")}: ^3{`${helper.formatNumber(userInfo.distance / 10000, distanceDigits)}`} ^7Km</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Car")}: ^3{`${userInfo.car}`}</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "I.R")}: ^3{`${userInfo.ir}`} ^7{translate(translatePath, "A.M")}: ^3{`${userInfo.am}`}</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Speed Limit")}: ^1{mciState.speedLimit} ^7Km/h</Button>
                        <Button width={25} height={4} align="left">^7{translate(translatePath, "Way")}: ^3{`${mciState.wayName}`}</Button>
                        <Button width={25} height={4} align="left">{mciState.freePit ? translate(translatePath, "^6You can enter the pit now!") : translate(translatePath, `^1Entering the pit costs ^7${moneyCurrency}^1500`)}</Button>
                    </Flex>
                    <Button width={25} height={6} align="left" top={194} left={25} UCID={255} background="dark">^2Speed: {(mciState.userSpeed > mciState.speedLimit) ? "^1" : "^7"}{helper.formatNumber(mciState.userSpeed, 0)} km/h</Button>
                </>
            )}
        </React.Fragment>
    );
};