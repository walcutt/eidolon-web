import { Move } from './Move';
import { RatingSet } from './RatingSet';
import { Note } from './Note';
import { PlaybookStaticInfo } from './PlaybookStaticInfo';

class PlaybookMutableInfo {
    PlayerName: string;
    EidolonName: string;
    Power: string;
    Moves: Move[];
    Ratings: RatingSet;
    Notes: Note[];

    constructor(playbook: PlaybookStaticInfo) {
        this.PlayerName = '';
        this.EidolonName = '';
        this.Power = playbook.PowerPrompt;
        this.Moves = [...playbook.StartingMoves];
        this.Ratings = playbook.BaseRatings.Copy();
        this.Notes = [];
    }
}