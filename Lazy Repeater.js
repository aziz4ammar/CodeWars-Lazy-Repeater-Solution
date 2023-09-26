function makeLooper(str) {
    let index = 0;
  
    return function() {
      if (index >= str.length) {
        index = 0;
      }
  
      return str.charAt(index++);
    };
  }
  
  // Example usage:
  const repeater = makeLooper("Hello");
  console.log(repeater()); // Output: "H"
  console.log(repeater()); // Output: "e"
  console.log(repeater()); // Output: "l"
  console.log(repeater()); // Output: "l"
  console.log(repeater()); // Output: "o"
  console.log(repeater()); // Output: "H" (starts over)  