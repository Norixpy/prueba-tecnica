function duplicar(arr) {
    const nuevoArreglo = [];
    for (let i = 0; i < arr.length; i++) {
      nuevoArreglo.push(arr[i] * 2);
    }
    return nuevoArreglo;
  }
  
  console.log(duplicar([3, 12, 45, 7])); // Retorna [6, 24, 90, 14]
  console.log(duplicar([8, 5]));         // Retorna [16, 10]