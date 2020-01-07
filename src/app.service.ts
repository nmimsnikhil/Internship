import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v4';
@Injectable()
export class AppService {
  dataBase = [];

  readData() {
    return this.dataBase;
  }

  getData() {
    return this.dataBase;
  }

  deleteData(uid) {
    for (let i = 0; i < this.dataBase.length; i++) {
      if (uid === this.dataBase[i].uid) {
        const data = this.dataBase.splice(i, 1);
        return this.dataBase;
      }
    }
  }

  createData(data) {
    data.uuid = uuid();
    this.dataBase.push(data);
    return this.dataBase;
  }

  updateData(id, name, age, uid) {
    for (const i of [this.dataBase.length]) {
      if (uid === this.dataBase[i].uuid) {
        this.dataBase[i].id = id;
        this.dataBase[i].name = name;
        this.dataBase[i].age = age;
        // this.dataBase.push(abc);
        /*if(ide<this.dataBase.length){
          const id=ide;
            this.dataBase.splice(id,2)
            this.dataBase.push(abc)
            return this.dataBase;
        }*/
        return this.dataBase;
      }
    }
    return 'Invalid Id';
  }
}
