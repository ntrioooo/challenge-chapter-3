function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].available);

    if(cars[i].available) {
      result.push(cars[i]);
    }
  }
  
  for(let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
