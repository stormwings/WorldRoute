import { Question } from './Question';
import { User } from './User';

export class Answer {
  constructor(public description: string, public question: Question, public createdAt?: Date, public user?: User) {}
}
