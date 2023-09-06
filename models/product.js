const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')
const p =path.join(rootDir,'data','products.json');
const getProductsFromFile = (cb) =>{
    //readFile is async code, so it registers a callback and doesnot return anything and hence undefined
    fs.readFile(p,(err,data)=>{
        if(err)  cb([]);
        else cb(JSON.parse(data));
    })
}
module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        getProductsFromFile((products)=>{
            //we must use arrow function so that 'this' remains in the context of the class
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        })
        //for big files use ReadStream
        
    }
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
} 