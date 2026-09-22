


class Temperature{
    constructor(celsius){
 this.celsius = celsius
    }
    get celsius(){
        return this._celsius
    }
    set celsius(value){
        if (value<-273) {
            console.log("Invalid tempereture");
            
        }else{

            this._celsius = value
        }
    }
}
const temp = new Temperature(35)
console.log(temp.celsius)

 const temp2 = new Temperature(-500);
console.log(temp2.celsius);
