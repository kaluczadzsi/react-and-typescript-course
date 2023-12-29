const API_KEY = 'abc';
let userName = 'Max';
let userAge = 34;

let isValid: boolean = true;

type StringOrNum = string | number;

let userID: StringOrNum;
// let userID: string | number;
userID = 123;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
//   id: string | number;
// };

let user: User;

user = {
  name: 'Obito',
  age: 31,
  isAdmin: true,
  id: 'abc', // 123
};

// user = {};

let hobbies: string[]; // number[], boolean[], { name: string, age: number }[]

hobbies = ['spots', 'cooking', 'reading'];
// hobbies = [1, 2, 3];

function add(a: number, b: number) {
  const result = a + b;
  // console.log(result);
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(
  a: number,
  b: number,
  calcFn: AddFn
  // calcFn: (a: number, b: number) => number
) {
  return calcFn(a, b);
}

calculate(2, 4, add);

interface Credentials {
  email: string;
  password: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  email: 'user@gmail.com',
  password: 'secretPass',
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ['Admin'],
//   userName: 'Max',
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ['Admin'],
  userName: 'Max',
};

type Role = 'admin' | 'user' | 'editor';
let role: Role; // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    // ...
  }
}

let roles: Array<Role>; // Role[]
roles = ['admin', 'editor'];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: 'Tony' }, { age: 29 });
