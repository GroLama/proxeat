import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, DocumentSnapshotExists } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private db:AngularFirestore) { }

  sendDataProducteur(collection:string,filename:string){
    let data = this.getDataFromJson(filename);
    let idDocument:string ;
    let dataToSend={description:'',
  horaires:'',
name:'',
photoDevanture:''};
    let fields = Object.keys(data);
    fields.forEach(field=>{
      let dataAlone = data[field];
      Object.keys(dataAlone).forEach(result=>{
        console.log(result);
        if(result == 'id'){
          idDocument = dataAlone[result].toString();
        }
        else{
          if(result == 'description'){
            dataToSend.description  = dataAlone[result]
          }
          if(result == 'horaires'){
            dataToSend.horaires  = dataAlone[result]
          }
          if(result == 'name'){
            dataToSend.name  = dataAlone[result]
          }
          if(result == 'photoDevanture'){
            dataToSend.photoDevanture  = dataAlone[result]
          }
          // dataToSend.result =
        }

      })
      this.populateDb(idDocument,dataToSend)
      dataToSend={description:'',
  horaires:'',
name:'',
photoDevanture:''};

    })
  }

  getDataFromJson(filename:string){
    let dataFile = require(`../files/${filename}.json`)
    return dataFile;
  }
  populateDb(id:string,value:any){
    this.db.collection("producteurs").doc(id).set(value)
  }
}
