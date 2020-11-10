export default class Message {
    public id: string;

    public text: string;

    public length: number;

    protected slices: Array<string>;

    constructor(id: string, text: string) {
      this.id = id;
      this.text = text;
      this.length = text.length;
    }

    public setSlices(slices: Array<string>) {
      this.slices = slices;
    }

    public getSlices(): Array<string> {
      return this.slices;
    }
}
