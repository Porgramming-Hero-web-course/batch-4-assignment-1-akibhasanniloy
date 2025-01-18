Union and Intersection types are important features in TypeScript that help ensure type safety in code.

Union type allows a variable to be one of several possibilities, denoted by the “|” symbol.
A variable with a union type can only use methods and properties that exist on all of its constituent types. If it tries to access a property that does not belong to any of them, it will throw an error.
You can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or custom logic.


Example:
let userName: string | number;
userName = "random name";
userName = 12345;

So, userName can either be a string or a number. This is useful when you have multiple functions with different parameter types but similar functionality.


Intersection type combines multiple types into one, denoted by the “&” symbol.
An intersection type combines the structure of two or more types into a single type. Any variable declared with an intersection type must satisfy all of the constraints imposed by each individual type.
Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types.

Example:
interface User {
    name: string;
}

interface Admin {
    role: string;
}

let userAdmin: User & Admin = {
    name: 'Alice',
    role: 'developer'
};

In this case, userAdmin has both the properties of User and Admin. This is useful when you want to create an object that needs to conform to multiple interfaces.
