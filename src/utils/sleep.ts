/**
 * Delays the execution of the subsequent code for a specified duration.
 * @param duration The time to delay in milliseconds.
 * @returns A Promise that resolves after the specified duration, effectively causing a sleep/delay.
*/
export const sleep = (duration: number): Promise<void> => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
};