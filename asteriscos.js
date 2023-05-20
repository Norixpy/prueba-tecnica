function asteriscos(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "*") {
        count++;
      }
    }
    return count;
  }
  
  console.log(asteriscos("H*o*l*a")); // Retorna 3
  console.log(asteriscos("Hola"));   // Retorna 0