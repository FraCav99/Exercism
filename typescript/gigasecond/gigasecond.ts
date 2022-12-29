export class Gigasecond {
  private readonly GIGA_SECOND = 10 ** 9;

  constructor(public moment: Date) {}

  public date(): Date {
    const ms = this.moment.getTime();
    return new Date(ms + (this.GIGA_SECOND * 1000));
  }
}
