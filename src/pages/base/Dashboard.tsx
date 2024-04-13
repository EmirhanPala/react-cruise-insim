import React from 'react';
import { Button, Flex } from 'react-node-insim';
import { useAppSelector } from 'src/hooks/hooks';
import { translate } from 'src/i18n/translate';
import { helper } from 'src/utils/helper';

const translatePath = "apps|dashboard";
export const Dashboard = () => {
    const mciState = useAppSelector(s => s.mci);
    return (
        <React.Fragment key={"Flex-1"}>
            <Flex
                top={84}
                left={169}
                width={27}
                alignItems="center"
                wrap="wrap"
                background="dark"
                backgroundColor="light"
                UCID={255}
                padding={1}
            >
                <Button width={25} height={4} align="left">^1React Cruise InSim</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Money")}: ^3TL 25943</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Bonus")}: ^3%19 (1)</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Distance")}: ^315106.7 ^7Km</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Car")}: ^3XFG</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "I.R")}: ^30 ^7{translate(translatePath, "A.M")}: ^30</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Speed Limit")}: ^1{mciState.speedLimit} ^7Km/h</Button>
                <Button width={25} height={4} align="left">^7{translate(translatePath, "Way")}: ^3{`${mciState.wayName}`}</Button>
                <Button width={25} height={4} align="left">{mciState.freePit ? translate(translatePath, "^6You can enter the pit now!") : translate(translatePath, "^1Entering the pit costs ^7$^1500")}</Button>
            </Flex>
            <Button width={25} height={6} align="left" top={194} left={25} UCID={255} background="dark">^2Speed: {(mciState.userSpeed > mciState.speedLimit) ? "^1" : "^7"}{helper.formatNumber(mciState.userSpeed, 0)} km/h</Button>
        </React.Fragment>
    );
};