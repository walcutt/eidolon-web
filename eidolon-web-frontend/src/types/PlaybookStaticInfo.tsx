import type { Move } from './Move';
import type { RatingSet } from './RatingSet';

class PlaybookStaticInfo {
    Title: string;
    PowerPrompt: JSX.Element;
    StartingMoves: Move[];
    AvailableMoves: Move[];
    BaseRatings: RatingSet;
    Range: string;
    Intro: JSX.Element;
    About: JSX.Element;
    ExamplePowers: JSX.Element[];

    constructor(title: string, powerPrompt: JSX.Element, startingMoves: Move[], availableMoves: Move[],
        baseRatings: RatingSet, range: string, intro: JSX.Element, about: JSX.Element, examplePowers: JSX.Element[]) {
        
        this.Title = title;
        this.PowerPrompt = powerPrompt;
        this.StartingMoves = startingMoves;
        this.AvailableMoves = availableMoves;
        this.BaseRatings = baseRatings;
        this.Range = range;
        this.Intro = intro;
        this.About = about;
        this.ExamplePowers = examplePowers;
    }
}

export { PlaybookStaticInfo };