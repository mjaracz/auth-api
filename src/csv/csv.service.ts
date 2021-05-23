import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CsvService {
  async writeFile(file) {
    await fs.promises
      .writeFile(
        './uploadFiles/100-contacts.csv',
        await Buffer.from(file.buffer),
      )
      .then(() => console.log('write success'))
      .catch(err => console.warn(err));
    return this.cleanYahoo();
  }

  async cleanYahoo() {
    let dataCSVarray: string[][] = [];
    const resultWithoutYahoo: string[] = [];
    await fs.promises
      .readFile('./uploadFiles/100-contacts.csv')
      .then(res => Buffer.from(res).toString())
      .then(str => str.split('\n'))
      .then(strArr => strArr.map(str => str.split(',')))
      .then(info => (dataCSVarray = info));
    dataCSVarray.map(info => {
      if (info[info.length - 1].includes('yahoo.com')) {
        info.splice(info.length - 1, 1);
        resultWithoutYahoo.push(info.join(','));
      }
      resultWithoutYahoo.push(info.join(','));
    });
    await fs.promises
      .writeFile(
        './uploadFiles/cleanYahoo/100-contacts.csv',
        resultWithoutYahoo.join('\n'),
      )
      .then(() => console.log('file was success save without yahoo domain'));
    return Buffer.from(resultWithoutYahoo.join('\n'));
  }
}
