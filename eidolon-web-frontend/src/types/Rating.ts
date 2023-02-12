class Rating {
    Name: string;
    Abbreviation: string;
    Value: number;

    constructor(name: string, abbreviation: string, value: number) {
        this.Name = name;
        this.Abbreviation = abbreviation;
        this.Value = value;
    }
}

export { Rating };