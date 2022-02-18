import Configuration from "./Configuration";

export default class Enviroment {
  public constructor(public config: Configuration) {
    this.config.score = 0;
  }

  public move() {
    this.config.score += 1;
    this.config.position = !this.config.position;
    return this.copyConfig();
  }

  public clean() {
    this.config.score += 2;
    const index = !this.config.position ? 0 : 1;
    this.config.dirt[index] = false;
    return this.copyConfig();
  }

  public isDirty() {
    const index = !this.config.position ? 0 : 1;
    return this.config.dirt[index];
  }

  public copyConfig() {
    return { ...this.config };
  }
}
