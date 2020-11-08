import { injectable } from "inversify";
import { IPingFinder } from '../interfaces'

@injectable()
export class PingFinder implements IPingFinder {
  private regexp = "ping";

  public isPing(stringToSearch: string): boolean {
    return stringToSearch.search(this.regexp) >= 0;
  }
}
