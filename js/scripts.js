$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();


      var roman="";
      var romanNumerals = ["M", "D", "C", "L", "X", "V", "I"];
      console.log(romanNumerals);
      var numbers = [1000, 500, 100, 50, 10, 5, 1];
      console.log(numbers);

      function convert(num) {
      for (var i=0;i<numbers.length;i++){
        console.log("test");
        while(num>=numbers[i]) {
          roman = roman + romanNumerals[i];
          console.log (roman);
          num = num - numbers[i];
          console.log(num);

        };


      };




      return roman;

    };
  });
});
