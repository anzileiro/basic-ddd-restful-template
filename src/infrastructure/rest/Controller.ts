import FileSystem from 'fs';
import Path from 'path';

export default class Controller {
    private CONTROLLER_PATH: string = '../../application/rest/v1/controllers/';

    public async setup(): Promise<any[]> {
      const directory: string[] = await FileSystem.readdirSync(
        Path.join(__dirname, this.CONTROLLER_PATH),
      );

      const files: any[] = directory.map((file: string) => require(
        Path.join(__dirname, `${this.CONTROLLER_PATH}${file}`),
      ));

      return files.map((instance: any) => new instance.default().setup());
    }
}
