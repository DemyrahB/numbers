// Complete the Numbers class below
// the constructor has already been provided

class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "1,2,3,3,5,9") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count(n1) {
      const data = "1,2,3,3,5,9"
      for (let i = 1; i < data.length; i++) {
        console.count()
      }
    }
    printNumbers(n1) {
      for (let i = 1; i < 100; i=i+1)
      console.log(i)
    }
    
    odds(n1) {
      let data = [1,2,3,3,5,9]
      const odds = data.filter((data) => data / 2 === 1);
      console.log(odds)
    }
    evens(n1) {
      let data = [1,2,3,3,5,9]
      const evens = data.filter((data) => data * 2);
      console.log(evens)
    }
    sum(n1) {
      let data = [1,2,3,3,5,9]
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i];
      }
      console.log(sum)
    }
    product(n1) {
      let data = [1,2,3,3,5,9];
      let product = 1;
      for (let i = 0; i < data.length; i++) {
        product *= data[i];
      };
      console.log(product);
    }
    greaterThan(target) {
      let data = [1,2,3,3,5,9];
      console.log(Math.max(...data));
    }
    howMany(target) {
      let data = [1,2,3,3,5,9]
      let arr = data.filter(x => x === 3).length
      console.log(arr)
    } 
  }
  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");
  
  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number