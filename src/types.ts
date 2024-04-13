import type { InSimFlags } from "node-insim/packets";
import type { ReactElement } from "react";

export type CreateRootOptions = {
    name: string;
    host: string;
    port: number;
    adminPassword?: string;
    flags?: InSimFlags;
    prefix?: string;
    UDPPort?: number;
    interval?: number;
    appendButtonIDs?: boolean;
    buttonClickIDStart?: number;
};

/** PLID (0-255) */
export type PlayerId = number;

export type GuardProps = {
    children: ReactElement | null;
};