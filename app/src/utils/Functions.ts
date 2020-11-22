import { Position } from "./Position";

export const outOfBounds = (bounds: Position, point: Position): -1 | 0 | 1 => {
    if (point.x < 0 || bounds.x <= point.x) {
        return -1;
    } else if (point.y < 0 || bounds.y <= point.y) {
        return 1;
    }
    return 0;
};