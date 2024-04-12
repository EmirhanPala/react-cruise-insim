/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { useEffect, useState } from 'react';
import { Button, Flex, Grid, GridButton, HStack, TextBox, VStack } from 'react-node-insim';
import { useAppSelector } from 'src/hooks/hooks';

interface IDashboardProps { };

const translatePath = "apps|dashboard";
export const Dashboard = (props: IDashboardProps) => {
    const mci = useAppSelector(s => s.mci);
    return (
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
            <Button width={25} height={4} align="left">^7Money: ^3TL 25943</Button>
            <Button width={25} height={4} align="left">^7Bonus: ^3%19 (1)</Button>
            <Button width={25} height={4} align="left">^7Distance: ^315106.7 ^7Km</Button>
            <Button width={25} height={4} align="left">^7Car: ^3XFG</Button>
            <Button width={25} height={4} align="left">^7I.R: ^30 ^7A.M: ^30</Button>
            <Button width={25} height={4} align="left">^7Speed Limit: ^1{mci.speedLimit} ^7Km/s</Button>
            <Button width={25} height={4} align="left" >^7Way: ^3{`${mci.wayName}`}</Button>
            <Button width={25} height={4} align="left">
                {mci.freePit ? "^6You can enter the pit now!" : "^1Entering the pit costs ^7$^1500"}
            </Button>
        </Flex>
    );
};