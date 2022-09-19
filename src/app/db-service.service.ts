import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, DocumentSnapshotExists } from "@angular/fire/compat/firestore";
import { ProducteurInterface } from './interfaces/ProducteurInterface';
import { User } from './interfaces/user';
import { Products } from './products';
import { History } from './interfaces/history';
@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private db:AngularFirestore) { }

//   sendDataProducteur(collection:string,filename:string){
//     let data = this.getDataFromJson(filename);
//     let idDocument:string ;
//     let dataToSend={description:'',
//   horaires:'',
// name:'',
// photoDevanture:''};
//     let fields = Object.keys(data);
//     fields.forEach(field=>{
//       let dataAlone = data[field];
//       Object.keys(dataAlone).forEach(result=>{
//         console.log(result);
//         if(result == 'id'){
//           idDocument = dataAlone[result].toString();
//         }
//         else{
//           if(result == 'description'){
//             dataToSend.description  = dataAlone[result]
//           }
//           if(result == 'horaires'){
//             dataToSend.horaires  = dataAlone[result]
//           }
//           if(result == 'name'){
//             dataToSend.name  = dataAlone[result]
//           }
//           if(result == 'photoDevanture'){
//             dataToSend.photoDevanture  = dataAlone[result]
//           }
//           // dataToSend.result =
//         }

//       })
//       this.populateDb(idDocument,dataToSend)
//       dataToSend={description:'',
//   horaires:'',
// name:'',
// photoDevanture:''};

//     })
//   }

//   getDataFromJson(filename:string){
//     let dataFile = require(`../files/${filename}.json`)
//     return dataFile;
//   }
//   populateDb(id:string,value:any){
//     this.db.collection("producteurs").doc(id).set(value)
//   }
userData:User ={
  uid: "",
 email: "",
 displayName: "",
 photoURL: "",
 emailVerified:false,
 phone:""
};
productsHistory:[]=[];
  public producteurList:ProducteurInterface[]=[];
  public producteurID:string='';
  public productsList:Products[]=[];
  productsListEvent = new EventEmitter<Products[]>();
  producteurEvent = new EventEmitter<ProducteurInterface[]>();
  producteurInfoEvent = new EventEmitter<ProducteurInterface>();

  async startFetch(){
    this.getProducteur()
  }
  async getProducteur(){
    this.clearProducts()
    this.clearList()
    let fireStoreQuery;
    let producteurId;
    let temporaryProducteur:ProducteurInterface={id:0,description:"",
      name:"",
      photoDevanture:"",
      horaires:"",
      localisationClear:"",};
    fireStoreQuery = this.db.collection('producteurs').get();
    fireStoreQuery.forEach(item=>{
      item.docs.forEach(data=>{
        producteurId = parseInt(data.id);
        temporaryProducteur = data.data() as ProducteurInterface;
        temporaryProducteur.id = producteurId;
        // temporaryProducteur = this.getProductList(producteurId,temporaryProducteur)
        this.producteurList.push(temporaryProducteur)
        this.producteurEvent.emit(this.producteurList)
      })



    })

  }
  getProducteurInfo(){
    let value;
    console.log(this.producteurID);

    let producteurInfo = this.db.collection('producteurs').doc(this.producteurID).get()
    let tempValue = producteurInfo.forEach(data=>{
      value=  data.data() as ProducteurInterface;
      this.producteurInfoEvent.emit(value)
    })


  }
  setUserInfo(uid:string,username:string,email:string,password:string,phone:string){
    let userInfo = this.db.collection('users').doc(uid);
    if(username!=undefined && username!=""){
  userInfo.update({
    displayName:username
  })
    }
    if(email!=undefined && email !=""){
      userInfo.update({
        email:email
      })
    }
    if(password!=undefined && password!=""){
      userInfo.update({
        password:password
      })
    }
    if(phone!=undefined && phone!=""){
      userInfo.update({
        phone:phone
      })
    }
  }
  getUserUID():string{
    let user = JSON.parse(localStorage.getItem('user')!);
    return user.uid

  }
  getUserInfo(uid:string){
    return this.db.collection('users').doc(uid).get();

  }
  async getProductList(id:number){
    this.clearProducts()
    this.clearList()
    let products;
    let firestoreQuery = this.db.collection('producteurs').doc(id.toString()).collection('produits').get();
    firestoreQuery.forEach(item=>{
      item.docs.forEach(data=>{
        products = data.data() as Products;
        this.productsList.push(products);
        this.productsListEvent.emit(this.productsList);


      })
    })

  }
  displayProd(){


  }
  clearList(){
    this.productsList =[]
    this.producteurList = []
  }
  storeProducts(products:any){
    this.productsHistory= products

  }
  getProductsHistory(){
    return this.productsHistory
  }
  clearProducts(){
    this.productsHistory = [];
  }
  storeProductHistory(uid:string,history:History[]){

    let tempQuery = this.db.collection('users').doc(uid).collection('history').doc();
    history.forEach(item=>{
      tempQuery.collection('inside').doc().set({
        'item':item.item,
        'price':item.price,
        'quantity':item.quantity
      })
    })

}
storeProducteurId(uid:string){
  this.producteurID = uid;
  console.log(this.producteurID);

}
clearProducteurID(){
  this.producteurID = '';
}
}
