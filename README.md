# Blog

## Differences between `interfaces` and `types` in TypeScript

- Define variables type using `interfaces` and `type`

  Example :

  ```bash
                          //// interface
    // Object
    interface User2 {
      name: string;
      roll: number;
    }

    // Function
    interface FuncInter {
      (number1: number, number2: number): number;
    }

    // Array
    interface Array {
      [index: number]: number;
    }

                          //// type
    // Single Variable
    type User3 = string;

    // Array
    type Array = number[];

    // Object
    type User = {
      name: string;
      roll: number;
    };

    // Funtion
     type Func1 = (num1: number, num2: number) => number;

  ```

- You can not define a single variables type using `interface` because we can not use "=" when we define something using interface. It can only possible by using `type`.

  Example:

  ```bash
  // Possible
    type User3 = string;

  // Not possible
    interface User4 = string  // or
    interface User4 (string)


  ```

- `interface` allow us to add more property in previous defined variable unlike `type` where we can't add more property.

  Example:

  ```bash
  // Possible
  interface User10 {
    name: string;
  }
  interface User10 {
    roll: number;
  }
  const user10: User10 = {
    name: "Tanim",
    roll: 34234,
  };

  // Not possible using `type`
  type User10 = {
    name: string;
  };
  type User10 = {
    roll: number;
  };
  ```

## Use of the `keyof` keyword in TypeScript.

- `keyof` provides all the key names of an object as string and If there are more then one key then `keyof` will give all the key as string and combined them using `union`.
  Example:

  ```bash
    type Transports = {
    bike: string;
    car: string;
    ship: string;
    };

    type Owner = keyof Transports; // keyof Transports == "bike" | "car" | "ship"

    const person: Owner = "car"; // persons key will match with Owners key "car"

    const person2 : Owner = "truck" // it will not match with Owners key as there are no "truck" key in Transport
  ```
