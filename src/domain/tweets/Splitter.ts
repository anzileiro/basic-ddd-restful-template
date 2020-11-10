import Message from '@domain/shared/Message';

export default class Splitter {
  private list: Array<Message> = [];

  private slices: Array<string>;

  private limiter: number;

  constructor(limiter: number) {
    this.limiter = limiter;
  }

  public slice(text: string) {
    this.slices = [];

    let current = this.limiter;
    let previous = 0;

    while (text[current]) {
      if (text[current++] === ' ') {
        this.slices.push(text.substring(previous, current));
        previous = current;
        current += this.limiter;
      }
    }

    this.slices.push(text.substr(previous));

    return this.slices;
  }

  public addMessages(message: Message) {
    message.setSlices(this.slice(message.text));

    this.list.push(message);
  }

  public listMessages() {
    return this.list;
  }
}
