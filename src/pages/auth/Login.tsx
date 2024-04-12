import React, { useEffect, useState } from 'react';
import { Button } from 'react-node-insim';
import { translate } from 'src/i18n/translate';

const translatePath = "apps|login";
export const Login = () => {
    const [totalSeconds, setTotalSeconds] = useState<number>(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTotalSeconds((prevSeconds) => {
                if (prevSeconds > 0)
                    return prevSeconds - 1;
                else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
        <>
            <Button top={20} left={80} width={40} height={8} align="center" background="light" UCID={255}>{`^1${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</Button>
            <Button top={80} left={0} width={200} height={12} align="center" background="transparent" UCID={255}>{`^7${translate(translatePath, "Bu kullanıcı adı şifreli. Giriş yapmak için şifre giriniz!")}`}</Button>
            <Button top={95} left={70} width={60} height={12} variant="dark" onType={(p) => { return p; }} maxTypeInChars={30} align="center" caption={`^1*************${translate(translatePath, "Şifrenizi Girin")}:*************`} UCID={255}>{`^3< ^7${translate(translatePath, "GİRİŞ")} ^3>`}</Button>
        </>
    );
};