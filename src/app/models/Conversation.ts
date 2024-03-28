import { Message } from './Message';
export class Conversation {
    id!: number;
    participants!: number[];
    messages!: Message[];
  }