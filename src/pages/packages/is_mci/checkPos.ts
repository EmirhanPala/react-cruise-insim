export const checkPos = (polySides: number, polyX: number[], polyY: number[], x: number, y: number): boolean => {
    let i: number, j: number = polySides - 1;
    let oddNodes: boolean = false;
    for (i = 0; i < polySides; i++) {
        if ((polyY[i] < y && polyY[j] >= y) || (polyY[j] < y && polyY[i] >= y)) {
            if (polyX[i] + (y - polyY[i]) / (polyY[j] - polyY[i]) * (polyX[j] - polyX[i]) < x) {
                oddNodes = !oddNodes;
            }
        }
        j = i;
    }
    return oddNodes;
};