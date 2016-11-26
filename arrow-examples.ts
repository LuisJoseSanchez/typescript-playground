module arrow_examples {
  var area = (h: number, w: number) => h * w;
  var average = (x1: number, x2: number, x3?: number) => {
    if (x3 === undefined) {
      return (x1 + x2) / 2;
    } else {
      return (x1 + x2 + x3) / 3;
    }
  }

  console.log(area(4, 6));
  console.log(average(4, 6));
  console.log(average(4, 6, 10));
}