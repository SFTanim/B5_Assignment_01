{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
      return input.toUpperCase();
    } else if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return "Please Provide any string";
    }
  }
  const inputData = formatString("Hello", false);
  console.log(inputData);
}

{
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let highestRatedItem: { title: string; rating: number }[] = [];
    items.map((item) => {
      if (item.rating > 4) {
        highestRatedItem.push(item);
      }
    });
    return highestRatedItem;
  }
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  const filterOutput = filterByRating(books);
  console.log(filterOutput);
}
{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArray: T[] = [];
    arrays.map((array) => {
      newArray = [...newArray, ...array];
    });
    return newArray;
  }
  const newArray1 = concatenateArrays<string>(["a", "b"], ["c"]);
  const newArray2 = concatenateArrays<number>([1, 2], [3, 4], [5]);
  console.log(newArray1);
  console.log(newArray2);
}

{
  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();
}

{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    } else {
      return 0;
    }
  }

  const value1 = processValue("hello");
  const value2 = processValue(10);
  console.log(value1, value2);
}

{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products) {
      let highestPrice = 0;
      let highestPricedValue: Product = {
        name: "",
        price: 0,
      };
      products.map((product) => {
        if (product.price > highestPrice) {
          highestPrice = product.price;
          highestPricedValue = product;
        }
      });
      return highestPricedValue;
    } else {
      return null;
    }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  const mostExpensive = getMostExpensiveProduct(products);
  console.log("Output: ", mostExpensive);
}

{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === 6) {
      return "Weekend";
    } else if (day < 6 && day >= 0) {
      return "Weekday";
    } else {
      return "Error";
    }
    console.log(day);
  }

  const holidayOrNot1 = getDayType(Day.Monday);
  const holidayOrNot2 = getDayType(Day.Sunday);
  console.log(holidayOrNot1, holidayOrNot2);
}

{
  async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      if (n >= 0) {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      } else {
        reject("Negative number not allowed.");
      }
    });
  }
  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
