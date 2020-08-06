import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: string) :string {
    let newPrice: string = "";
    let cadenaNueva="" ;
    let cont=0
    for (var i = price.length - 1; i >= 0; i--) {
        
      if(cont==4){
        newPrice+= price.charAt(i);
        newPrice+= price.charAt(Number(','))
      }else{
        newPrice+= price.charAt(i);
      }
    
      console.log(newPrice)
    }
    cont+=1

    cadenaNueva=this.invertir(newPrice)
    cadenaNueva ="$"+cadenaNueva+" "+"COP"
    console.log(cadenaNueva)
    return cadenaNueva;
  }
  
 
  invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
  }

}
