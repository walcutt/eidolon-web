import type { MoveType } from './MoveType';

class Move {
    Name: string;
    Rules: string;
    Type: MoveType;
    Prerequisites: string[];

    constructor(name: string, rules: string, type: MoveType, prerequisites: string[] = []) {
        this.Name = name;
        this.Rules = rules;
        this.Type = type;
        this.Prerequisites = prerequisites;
    }
}

export { Move };