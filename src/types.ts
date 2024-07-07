import type { ReactElement } from "react";

/** PLID (0-255) */
export type PlayerId = number;

export type GuardProps = {
    children: ReactElement | null;
};

export const moneyDigits = 2;
export const distanceDigits = 1;