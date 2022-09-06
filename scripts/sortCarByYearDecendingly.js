function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  for (let i = 0; i < result.length; i++) {
    let flag = result.length-i-1;
    for (let j = 0; j < flag; j++) {
      let x = result[j].year
      let y = result[j+1].year
      if (x < y) {
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].year);
  }


  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
