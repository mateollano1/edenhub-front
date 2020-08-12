import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: string) :string {
    // let newPrice: string = "";
    // let cadenaNueva="" ;
    // let cont=0
    if (price == undefined) {
      return
    }
    price = price.toString()
    let init = price.slice(0,price.length-3)
    let end = price.slice(price.length-3,price.length)
    return `$${init},${end} COP`
    // for (var i = price.length - 1; i >= 0; i--) {   
    //   if(cont==4){
    //     newPrice+= price.charAt(i);
    //     newPrice+= price.charAt(Number(','))
    //   }else{
    //     newPrice+= price.charAt(i);
    //   }
    // }
    // cont+=1

    // cadenaNueva=this.invertir(newPrice)
    // cadenaNueva ="$"+cadenaNueva+" "+"COP"
    // console.log(cadenaNueva)
    // return cadenaNueva;
  }
  
 
  // invertir(cadena) {
  //   var x = cadena.length;
  //   var cadenaInvertida = "";
  //   while (x>=0) {
  //     cadenaInvertida = cadenaInvertida + cadena.charAt(x);
  //     x--;
  //   }
  //   return cadenaInvertida;
  // }

}
