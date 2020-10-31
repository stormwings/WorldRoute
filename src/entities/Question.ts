import { Answer } from './Answer';

export class Question {
  _id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  answers: Answer[];

  constructor(title: string, description: string, createdAt?: Date, icon?: string) {
    this._id = '1';
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.answers = [];
  }
}
