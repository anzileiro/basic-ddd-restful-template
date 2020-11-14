import FileSystem from 'fs';
import Path from 'path';
import Configuration from '@infrastructure/rest/Configuration';

export default class Controller {
  public async setup(): Promise<any[]> {
    const directory: string[] = await FileSystem.readdirSync(
      Path.join(__dirname, Configuration.CONTROLLER_PATH),
    );

    const files: any[] = directory.map((file: string) => require(
      Path.join(__dirname, `${Configuration.CONTROLLER_PATH}${file}`),
    ));

    return files.map((instance: any) => new instance.default().setup());
  }
}
