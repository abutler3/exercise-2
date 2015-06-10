var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if(a != b && b != c) {
      return "scalene";
    } else if (a == b && a != c || a == c && a != b || b == c && b != a) {
      return "isosceles";
    } else if (a == b && a == c) {
      return "equilateral";
    } else {

    }
  };
};
