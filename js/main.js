
//Criar uma função que exclua os números ímpares de um array
//Dividindo o problema em partes:
//Tenho que filtrar este array e em seguida verificar os números que são ímpares e excluí-los.
 function deleteOdd(listHead) {
   
   let pair = listHead.filter( index => index % 2 == 0) ;


  console.log(pair);
} 

 let listHead = [1,2,3,4,5,6,7,8,9,10];

deleteOdd(listHead);

 

//Exemplo na Net
 /* var numbers = [1,2,3,4,5,6,7,8];

 var evenNumbers = numbers.filter(function(item) {
      return(item % 2 == 0);
 });

 console.log(evenNumbers); */




