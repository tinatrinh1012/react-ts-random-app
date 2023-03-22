import * as React from 'react';

/* TYPE vs. INTERFACE */
type Person = {
  name: string;
  age?: number;
};
interface Student extends Person {
  name: string;
  age?: number;
}
interface Teacher extends X {
  name: string;
  age: number;
}
type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: number;
};
type Z = Person & {
  e: string;
  f: number;
};

/* DECLARE VARIABLE TYPE */
let name: any;
let personName: unknown;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];

// tuple
let role: [number, string];

// object
let person: Person = {
  name: 'Tina',
};

// array
let lotsOfPeople: Person[];

// function
let printNameFunction: (name: string) => never; // 'never' doesn't return anything, while 'void' returns an undefined

/* EXAMPLE */
// using defined type
let y: Y = {
  // has to include X type attribute
  c: 'asdf',
  d: 123,
  a: 'jk;',
  b: 234,
};

function printName(name: string) {
  console.log(name);
}

role = [5, 'tina'];

export default function App() {
  return (
    <div>
      <h1>React + Typescript App</h1>
      <h3>Home Page</h3>
      <ul>
        <li>
          <a href="/random-cat-dog">Random Cat Dog</a>
        </li>
        <li>
          <a href="/todo-app">Todo App</a>
        </li>
      </ul>
    </div>
  );
}
