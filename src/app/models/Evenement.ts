export class Evenement {
    id!: number;
    nom!: string;
    description!: string;
    date!: Date;
    lieu!: string;
    associations: number[] = [];
  }
  