if(19==19){
  console.log("Both values are equal");
}

const edad = 18;
const cantidad = "18"

if(edad==cantidad){ // == compara solo el valor
  console.log("Both values (age and quantity) are equal");
} else {
  console.log("Both values are different");
}

if(edad===cantidad){ // === compara valor y tipo
  console.log("Both values (age and quantity) are equal");
} else {
  console.log("Both values are different");
}