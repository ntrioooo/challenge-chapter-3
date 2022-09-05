function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < result.length-1; j++) {
      let x = result[i];
      let y = result[j];
      if (result[j].year > result[i].year) {
        result[j] = x;
        result[i] = y;
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
