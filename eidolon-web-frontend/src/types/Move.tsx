import type { MoveType } from './MoveType';

class Move {
    Name: string;
    Rules: JSX.Element;
    Type: MoveType;
    Prerequisites: string[];

    constructor(name: string, rules: JSX.Element, type: MoveType, prerequisites: string[] = []) {
        this.Name = name;
        this.Rules = rules;
        this.Type = type;
        this.Prerequisites = prerequisites;
    }
}

export { Move };