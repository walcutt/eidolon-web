import { Rating } from './Rating';

class RatingSet {
    Powerful: Rating;
    Elegant: Rating;
    Genius: Rating;
    Glamorous: Rating;
    Bizarre: Rating;

    constructor(pow: number, ele: number, gen: number, glam: number, biz: number) {
        this.Powerful = new Rating('Powerful', 'POW', pow);
        this.Elegant = new Rating('Elegant', 'ELE', ele);
        this.Genius = new Rating('Genius', 'GEN', gen);
        this.Glamorous = new Rating('Glamorous', 'GLAM', glam);
        this.Bizarre = new Rating('Bizarre', 'BIZ', biz);
    }

    public Copy(): RatingSet {
        return new RatingSet(this.Powerful.Value, this.Elegant.Value, this.Genius.Value, this.Glamorous.Value, this.Bizarre.Value);
    }
}

export { RatingSet };