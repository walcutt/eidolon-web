import { Move } from './Move';
import { RatingSet } from './RatingSet';

class PlaybookStaticInfo {
    Title: string;
    PowerPrompt: string;
    StartingMoves: Move[];
    AvailableMoves: Move[];
    BaseRatings: RatingSet;
    Range: string;
    Intro: string;
    About: string;
    ExamplePowers: string[];

    constructor(title: string, powerPrompt: string, startingMoves: Move[], availableMoves: Move[],
        baseRatings: RatingSet, range: string, intro: string, about: string, examplePowers: string[]) {
        
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