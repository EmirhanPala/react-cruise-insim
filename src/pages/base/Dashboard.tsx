/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react';
import { Button, Flex, Grid, GridButton, HStack, TextBox, useConnections, VStack } from 'react-node-insim';
import { useAppSelector } from 'src/hooks/hooks';
import { helper } from 'src/utils/helper';

interface IDashboardProps { };

const translatePath = "apps|dashboard";
export const Dashboard = (props: IDashboardProps) => {
    const connections = useConnections();
    const mciState = useAppSelector(s => s.mci);
    return (
        <>
            {connections?.size > 0 && connections?.map((m, k) => (
                <React.Fragment key={m.UCID}>
                    <Flex
                        top={84}
                        left={169}
                        width={27}
                        alignItems="center"
                        wrap="wrap"
                        background="dark"
                        backgroundColor="light"
                        UCID={m.UCID}
                        padding={1}
                    >
                        <Button width={25} height={4} align="left">^1React Cruise InSim</Button>
                        <Button width={25} height={4} align="left">^7Money: ^3TL 25943</Button>
                        <Button width={25} height={4} align="left">^7Bonus: ^3%19 (1)</Button>
                        <Button width={25} height={4} align="left">^7Distance: ^315106.7 ^7Km</Button>
                        <Button width={25} height={4} align="left">^7Car: ^3XFG</Button>
                        <Button width={25} height={4} align="left">^7I.R: ^30 ^7A.M: ^30</Button>
                        <Button width={25} height={4} align="left">^7Speed Limit: ^1{mciState.speedLimit} ^7Km/h</Button>
                        <Button width={25} height={4} align="left" >^7Way: ^3{`${mciState.wayName}`}</Button>
                        <Button width={25} height={4} align="left">{mciState.freePit ? "^6You can enter the pit now!" : "^1Entering the pit costs ^7$^1500"}</Button>
                    </Flex>
                    <Button width={25} height={6} align="left" top={194} left={25} UCID={m.UCID} background="dark">^2Speed: {(mciState.userSpeed > mciState.speedLimit) ? "^1" : "^7"}{helper.formatNumber(mciState.userSpeed, 0)} km/h</Button>
                </React.Fragment>
            ))}
        </>
    );
};