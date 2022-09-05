function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini


//   for (let i = 0; i < cars.lengths; i++) {
//     console.log(cars[i].available);
    // for (let j = i+1; j < (cars.lengths); j++) {
    //   if (cars[j][1].year > cars[i][1].year) {
    //       let tmp = cars[i];
    //       cars[i] = cars[j];
    //       cars[j] = tmp;   
    //   }
    // }
    // console.log(cars);
// }  

  // for (let i = 0; i < cars.length; i++) {
  //   // console.log(cars[i].year);
  //   for (let j = i+1; j < cars.lengths; j++) {
  //     if (cars[i].year > cars[j].year) {
  //         let tmp = cars[i];
  //         cars[i] = cars[j];
  //         cars[j] = tmp;   
  //       }
  //     }
  //     console.log(cars[i].year);
  //   }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
