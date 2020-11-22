export type Dimension = {
    height: number;
    width: number;
}

export interface StateMachine {
    state: 0 | 1 | 2;
};

export type Class = new (...args: any[]) => {};