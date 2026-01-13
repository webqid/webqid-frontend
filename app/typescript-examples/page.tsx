import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TypeScript Cheatsheet — Christian van de Weerd",
  description: "TypeScript types, utilities, and patterns with examples.",
};

export default function TypeScriptExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center border-b border-gray-800 pb-8">
          <h1 className="text-4xl font-bold mb-2">TypeScript Cheatsheet</h1>
          <p className="text-gray-400">Types, utilities, and patterns</p>
        </header>

        {/* ================================================================== */}
        {/* BASIC TYPES */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-4">Basic Types</h2>

        {/* Primitives */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">Primitives</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Primitives
const str: string = "hello";
const num: number = 42;
const bool: boolean = true;
const n: null = null;
const u: undefined = undefined;
const sym: symbol = Symbol("id");
const big: bigint = 100n;

// Arrays
const nums: number[] = [1, 2, 3];
const strs: Array<string> = ["a", "b"];

// Tuple
const tuple: [string, number] = ["age", 30];
const named: [name: string, age: number] = ["John", 30];

// Object
const obj: { name: string; age: number } = { name: "John", age: 30 };

// Any / Unknown
const any: any = "anything";        // Avoid! No type checking
const unk: unknown = "anything";    // Safe: must check before use

// Void / Never
function log(): void { console.log("hi"); }
function fail(): never { throw new Error(); }  // Never returns`}</code>
          </pre>
        </section>

        {/* Union & Intersection */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">Union & Intersection</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Union: one of these types
type StringOrNumber = string | number;
type Status = "pending" | "success" | "error";

const value: StringOrNumber = "hello";  // ✓
const status: Status = "pending";       // ✓

// Intersection: combine types
type Name = { name: string };
type Age = { age: number };
type Person = Name & Age;

const person: Person = { name: "John", age: 30 };  // Must have both

// Discriminated Union
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

const ok: Result<number> = { success: true, data: 42 };
const err: Result<number> = { success: false, error: "Failed" };`}</code>
          </pre>
        </section>

        {/* Interface vs Type */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">Interface vs Type</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Interface: extendable, for objects
interface User {
  id: number;
  name: string;
  email?: string;              // Optional
  readonly createdAt: Date;    // Immutable
}

interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// Declaration merging (interface only)
interface User {
  age?: number;  // Adds to existing User
}

// Type: more flexible, for any type
type ID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;

// Type intersection (like extends)
type AdminUser = User & { role: "admin" };

// When to use which?
// Interface: objects, classes, extensibility
// Type: unions, tuples, complex types, mapped types`}</code>
          </pre>
        </section>

        {/* Functions */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-blue-400">Functions</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Function types
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

type MathFn = (a: number, b: number) => number;
const divide: MathFn = (a, b) => a / b;

// Optional & default parameters
function greet(name: string, greeting = "Hello"): string {
  return \`\${greeting}, \${name}\`;
}

function log(message: string, level?: string): void {
  console.log(level ? \`[\${level}] \${message}\` : message);
}

// Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Overloads
function parse(input: string): number;
function parse(input: number): string;
function parse(input: string | number): string | number {
  return typeof input === "string" ? parseInt(input) : String(input);
}

// This parameter
function onClick(this: HTMLButtonElement, event: Event): void {
  console.log(this.textContent);
}`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* UTILITY TYPES */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Utility Types
        </h2>

        {/* Partial / Required / Readonly */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">Partial / Required / Readonly</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`interface User {
  id: number;
  name: string;
  email?: string;
}

// Partial<T> - All properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string }

const update: Partial<User> = { name: "New Name" };  // ✓

// Required<T> - All properties required
type RequiredUser = Required<User>;
// { id: number; name: string; email: string }

// Readonly<T> - All properties readonly
type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; readonly email?: string }

const user: ReadonlyUser = { id: 1, name: "John" };
// user.name = "Jane";  // ✗ Error: readonly`}</code>
          </pre>
        </section>

        {/* Pick / Omit */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">Pick / Omit</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Pick<T, K> - Select specific properties
type UserCredentials = Pick<User, "email" | "password">;
// { email: string; password: string }

// Omit<T, K> - Exclude specific properties
type PublicUser = Omit<User, "password">;
// { id: number; name: string; email: string; createdAt: Date }

// Combine for API responses
type CreateUserInput = Pick<User, "name" | "email" | "password">;
type UserResponse = Omit<User, "password">;`}</code>
          </pre>
        </section>

        {/* Record */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">Record</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Record<K, V> - Object with keys K and values V
type UserMap = Record<string, User>;
const users: UserMap = {
  user1: { id: 1, name: "John", email: "j@example.com", password: "x", createdAt: new Date() },
};

// With literal keys
type Status = "pending" | "active" | "inactive";
type StatusColors = Record<Status, string>;

const colors: StatusColors = {
  pending: "yellow",
  active: "green",
  inactive: "gray",
};

// Empty object type
type EmptyObject = Record<string, never>;`}</code>
          </pre>
        </section>

        {/* Extract / Exclude */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">Extract / Exclude</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`type Status = "pending" | "active" | "error" | "success";

// Extract<T, U> - Keep types assignable to U
type ActiveStatus = Extract<Status, "active" | "success">;
// "active" | "success"

// Exclude<T, U> - Remove types assignable to U
type NotError = Exclude<Status, "error">;
// "pending" | "active" | "success"

// With complex types
type Shape = { kind: "circle"; r: number } | { kind: "rect"; w: number; h: number };
type Circle = Extract<Shape, { kind: "circle" }>;
// { kind: "circle"; r: number }`}</code>
          </pre>
        </section>

        {/* NonNullable */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">NonNullable</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`type MaybeString = string | null | undefined;

// NonNullable<T> - Remove null and undefined
type DefiniteString = NonNullable<MaybeString>;
// string

// Useful for strictNullChecks
function process(value: MaybeString): NonNullable<MaybeString> {
  if (value == null) throw new Error("Value required");
  return value;
}`}</code>
          </pre>
        </section>

        {/* ReturnType / Parameters */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">ReturnType / Parameters</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`function createUser(name: string, age: number) {
  return { id: Math.random(), name, age, createdAt: new Date() };
}

// ReturnType<T> - Get function return type
type User = ReturnType<typeof createUser>;
// { id: number; name: string; age: number; createdAt: Date }

// Parameters<T> - Get function parameter types as tuple
type CreateUserParams = Parameters<typeof createUser>;
// [name: string, age: number]

// Awaited<T> - Unwrap Promise
async function fetchUser(): Promise<User> { /* ... */ }
type FetchedUser = Awaited<ReturnType<typeof fetchUser>>;
// User (not Promise<User>)

// ConstructorParameters<T>
class Person {
  constructor(public name: string, public age: number) {}
}
type PersonParams = ConstructorParameters<typeof Person>;
// [name: string, age: number]`}</code>
          </pre>
        </section>

        {/* InstanceType */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-green-400">InstanceType</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`class ApiClient {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  fetch(path: string) { /* ... */ }
}

// InstanceType<T> - Get instance type from class
type Client = InstanceType<typeof ApiClient>;
// ApiClient

// Useful for factories
function createInstance<T extends new (...args: any[]) => any>(
  Class: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new Class(...args);
}

const client = createInstance(ApiClient, "https://api.example.com");`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* GENERICS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Generics
        </h2>

        {/* Basic Generics */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Basic Generics</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Generic function
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");  // Explicit
identity(42);               // Inferred as number

// Generic arrow function
const first = <T,>(arr: T[]): T | undefined => arr[0];

// Multiple type parameters
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

const p = pair("hello", 42);  // [string, number]

// Generic interface
interface Box<T> {
  value: T;
  map<U>(fn: (val: T) => U): Box<U>;
}

// Generic type alias
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };`}</code>
          </pre>
        </section>

        {/* Generic Constraints */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Generic Constraints</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// extends constraint
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");     // ✓ string has length
getLength([1, 2, 3]);   // ✓ array has length
// getLength(42);       // ✗ number has no length

// keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "John", age: 30 };
getProperty(user, "name");  // string
getProperty(user, "age");   // number
// getProperty(user, "foo"); // ✗ Error

// Multiple constraints
interface HasId { id: string }
interface HasName { name: string }

function merge<T extends HasId & HasName>(item: T): T {
  return item;
}

// Default type parameter
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}`}</code>
          </pre>
        </section>

        {/* Generic Classes */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-purple-400">Generic Classes</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.pop();  // 2

// With constraint
class Repository<T extends { id: string }> {
  private items = new Map<string, T>();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }
}`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* CONDITIONAL TYPES */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Conditional Types
        </h2>

        {/* Basic Conditional */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-400">Basic Conditional</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;   // true
type B = IsString<number>;   // false

// Nullable check
type IsNullable<T> = null extends T ? true : false;

type C = IsNullable<string | null>;  // true
type D = IsNullable<string>;         // false

// Conditional return type
function process<T extends string | number>(
  value: T
): T extends string ? number : string {
  if (typeof value === "string") {
    return parseInt(value) as any;
  }
  return String(value) as any;
}

process("42");  // number
process(42);    // string`}</code>
          </pre>
        </section>

        {/* Infer Keyword */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-400">Infer Keyword</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// infer: extract types from other types

// Unwrap Promise
type Unwrap<T> = T extends Promise<infer U> ? U : T;

type A = Unwrap<Promise<string>>;  // string
type B = Unwrap<number>;           // number

// Get array element type
type ElementOf<T> = T extends (infer E)[] ? E : never;

type C = ElementOf<string[]>;    // string
type D = ElementOf<[1, "a", true]>;  // 1 | "a" | true

// Get function return type (manual)
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Get first argument type
type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : never;

type E = FirstArg<(name: string, age: number) => void>;  // string

// Infer in template literal
type GetRouteParams<T> = T extends \`\${string}:\${infer Param}/\${infer Rest}\`
  ? Param | GetRouteParams<Rest>
  : T extends \`\${string}:\${infer Param}\`
  ? Param
  : never;

type Params = GetRouteParams<"/users/:userId/posts/:postId">;
// "userId" | "postId"`}</code>
          </pre>
        </section>

        {/* Distributive Conditional */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-yellow-400">Distributive Conditional</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Conditional types distribute over unions
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string | number>;
// string[] | number[]  (not (string | number)[])

// Prevent distribution with tuple
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;

type B = ToArrayNonDist<string | number>;
// (string | number)[]

// Filter union members
type OnlyStrings<T> = T extends string ? T : never;

type C = OnlyStrings<string | number | boolean>;
// string

// Exclude null/undefined (manual NonNullable)
type NoNull<T> = T extends null | undefined ? never : T;

type D = NoNull<string | null | undefined>;
// string`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* MAPPED TYPES */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Mapped Types
        </h2>

        {/* Basic Mapped Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Basic Mapped Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Transform each property
type Readonly<T> = { readonly [K in keyof T]: T[K] };
type Partial<T> = { [K in keyof T]?: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };  // Remove optional

// Nullable all properties
type Nullable<T> = { [K in keyof T]: T[K] | null };

interface User {
  name: string;
  age: number;
}

type NullableUser = Nullable<User>;
// { name: string | null; age: number | null }

// Remove readonly
type Mutable<T> = { -readonly [K in keyof T]: T[K] };

// Pick implementation
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };`}</code>
          </pre>
        </section>

        {/* Key Remapping */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Key Remapping (as)</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Rename keys with template literals
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }

// Filter keys
type OnlyStringKeys<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K]
};

interface Mixed {
  name: string;
  age: number;
  email: string;
}

type StringProps = OnlyStringKeys<Mixed>;
// { name: string; email: string }

// Prefix all keys
type Prefixed<T, P extends string> = {
  [K in keyof T as \`\${P}\${string & K}\`]: T[K]
};

type PrefixedUser = Prefixed<User, "user_">;
// { user_name: string; user_age: number }`}</code>
          </pre>
        </section>

        {/* Deep Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Deep / Recursive Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Deep Partial
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
};

// Deep Readonly
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};

// Deep Required
type DeepRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K]
};

interface Config {
  api: {
    url: string;
    timeout?: number;
  };
  features?: {
    darkMode?: boolean;
  };
}

type PartialConfig = DeepPartial<Config>;
// All nested properties optional

type RequiredConfig = DeepRequired<Config>;
// All nested properties required`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* TEMPLATE LITERAL TYPES */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Template Literal Types
        </h2>

        {/* Basic Template Literals */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-pink-400">Template Literal Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Combine string literals
type Greeting = \`Hello, \${string}\`;
const g: Greeting = "Hello, World";  // ✓

// Union expansion
type Size = "sm" | "md" | "lg";
type Color = "red" | "blue";
type ButtonClass = \`btn-\${Size}-\${Color}\`;
// "btn-sm-red" | "btn-sm-blue" | "btn-md-red" | ...

// Event names
type EventName = \`on\${Capitalize<"click" | "focus" | "blur">}\`;
// "onClick" | "onFocus" | "onBlur"

// CSS properties
type CSSProp = "margin" | "padding";
type Direction = "Top" | "Right" | "Bottom" | "Left";
type SpacingProp = \`\${CSSProp}\${Direction}\`;
// "marginTop" | "marginRight" | "paddingTop" | ...

// API routes
type ApiRoute<T extends string> = \`/api/v1/\${T}\`;
type UserRoute = ApiRoute<"users">;         // "/api/v1/users"
type PostRoute = ApiRoute<"posts">;         // "/api/v1/posts"`}</code>
          </pre>
        </section>

        {/* String Manipulation */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-pink-400">String Manipulation Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Built-in string manipulation
type A = Uppercase<"hello">;      // "HELLO"
type B = Lowercase<"HELLO">;      // "hello"
type C = Capitalize<"hello">;     // "Hello"
type D = Uncapitalize<"Hello">;   // "hello"

// Snake to camel case
type SnakeToCamel<S extends string> =
  S extends \`\${infer T}_\${infer U}\`
    ? \`\${T}\${Capitalize<SnakeToCamel<U>>}\`
    : S;

type E = SnakeToCamel<"user_first_name">;  // "userFirstName"

// Split string
type Split<S extends string, D extends string> =
  S extends \`\${infer T}\${D}\${infer U}\`
    ? [T, ...Split<U, D>]
    : [S];

type F = Split<"a-b-c", "-">;  // ["a", "b", "c"]

// Join (reverse)
type Join<T extends string[], D extends string> =
  T extends [infer F extends string, ...infer R extends string[]]
    ? R extends []
      ? F
      : \`\${F}\${D}\${Join<R, D>}\`
    : "";

type G = Join<["a", "b", "c"], "-">;  // "a-b-c"`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* TYPE GUARDS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Type Guards
        </h2>

        {/* Type Predicates */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-400">Type Predicates</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// is keyword - custom type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function process(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());  // value is string
  }
}

// Object type guard
interface User { type: "user"; name: string }
interface Admin { type: "admin"; permissions: string[] }
type Person = User | Admin;

function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

function handle(person: Person) {
  if (isAdmin(person)) {
    console.log(person.permissions);  // person is Admin
  } else {
    console.log(person.name);         // person is User
  }
}

// Array filter with type guard
const mixed: (string | number)[] = [1, "a", 2, "b"];
const strings = mixed.filter((x): x is string => typeof x === "string");
// strings: string[]`}</code>
          </pre>
        </section>

        {/* Assertion Functions */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-400">Assertion Functions</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// asserts keyword - throw if false
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error(\`Expected string, got \${typeof value}\`);
  }
}

function process(value: unknown) {
  assertIsString(value);
  console.log(value.toUpperCase());  // value is string after assertion
}

// Assert non-null
function assertDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error("Value must be defined");
  }
}

const maybeUser: User | null = getUser();
assertDefined(maybeUser);
console.log(maybeUser.name);  // maybeUser is User`}</code>
          </pre>
        </section>

        {/* Discriminated Unions */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-400">Discriminated Unions</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Discriminant property narrows type
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rect":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

// Result type
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function handle<T>(result: Result<T>) {
  if (result.ok) {
    console.log(result.value);  // result.value is T
  } else {
    console.log(result.error);  // result.error is Error
  }
}

// Async state
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };`}</code>
          </pre>
        </section>

        {/* Exhaustive Checks */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-400">Exhaustive Checks</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Ensure all cases handled
function assertNever(value: never): never {
  throw new Error(\`Unhandled value: \${value}\`);
}

type Status = "pending" | "active" | "done";

function handleStatus(status: Status): string {
  switch (status) {
    case "pending":
      return "Waiting...";
    case "active":
      return "In progress";
    case "done":
      return "Complete";
    default:
      return assertNever(status);  // Error if case missing
  }
}

// If you add "cancelled" to Status, TypeScript will error
// at assertNever because "cancelled" is not handled`}</code>
          </pre>
        </section>

        {/* ================================================================== */}
        {/* ADVANCED PATTERNS */}
        {/* ================================================================== */}

        <h2 className="text-3xl font-bold text-center pt-8 border-t border-gray-800">
          Advanced Patterns
        </h2>

        {/* Branded Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Branded / Nominal Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Prevent mixing incompatible types
declare const brand: unique symbol;
type Brand<T, B> = T & { [brand]: B };

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

// Factory functions
function createUserId(id: string): UserId {
  return id as UserId;
}

function createPostId(id: string): PostId {
  return id as PostId;
}

function getUser(id: UserId) { /* ... */ }

const userId = createUserId("user-123");
const postId = createPostId("post-456");

getUser(userId);  // ✓
// getUser(postId);  // ✗ Error: PostId not assignable to UserId

// Validated types
type Email = Brand<string, "Email">;
type PositiveNumber = Brand<number, "PositiveNumber">;

function createEmail(email: string): Email {
  if (!email.includes("@")) throw new Error("Invalid email");
  return email as Email;
}`}</code>
          </pre>
        </section>

        {/* Builder Pattern */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Builder Pattern</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`class QueryBuilder<T extends object = {}> {
  private query: Partial<T> = {};

  where<K extends string, V>(
    key: K,
    value: V
  ): QueryBuilder<T & Record<K, V>> {
    (this.query as any)[key] = value;
    return this as any;
  }

  orderBy<K extends string>(
    key: K,
    dir: "asc" | "desc" = "asc"
  ): QueryBuilder<T & { orderBy: K; orderDir: typeof dir }> {
    (this.query as any).orderBy = key;
    (this.query as any).orderDir = dir;
    return this as any;
  }

  build(): T {
    return this.query as T;
  }
}

const query = new QueryBuilder()
  .where("name", "John")
  .where("age", 30)
  .orderBy("createdAt", "desc")
  .build();

// Type: { name: string; age: number; orderBy: "createdAt"; orderDir: "desc" }`}</code>
          </pre>
        </section>

        {/* Tuple Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Tuple Manipulation</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Get first/last element
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;

type A = First<[1, 2, 3]>;  // 1
type B = Last<[1, 2, 3]>;   // 3

// Get tail (remove first)
type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;
type C = Tail<[1, 2, 3]>;  // [2, 3]

// Get init (remove last)
type Init<T extends any[]> = T extends [...infer I, any] ? I : never;
type D = Init<[1, 2, 3]>;  // [1, 2]

// Tuple length
type Length<T extends any[]> = T["length"];
type E = Length<[1, 2, 3]>;  // 3

// Push/Unshift
type Push<T extends any[], V> = [...T, V];
type Unshift<T extends any[], V> = [V, ...T];

type F = Push<[1, 2], 3>;     // [1, 2, 3]
type G = Unshift<[2, 3], 1>;  // [1, 2, 3]

// Concat
type Concat<A extends any[], B extends any[]> = [...A, ...B];
type H = Concat<[1, 2], [3, 4]>;  // [1, 2, 3, 4]`}</code>
          </pre>
        </section>

        {/* Object Path Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Object Path Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Get all possible paths
type Path<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends object
    ? K | \`\${K}.\${Path<T[K]>}\`
    : K
  : never;

interface User {
  name: string;
  address: {
    city: string;
    zip: number;
  };
}

type UserPaths = Path<User>;
// "name" | "address" | "address.city" | "address.zip"

// Get value at path
type PathValue<T, P extends string> =
  P extends \`\${infer K}.\${infer Rest}\`
    ? K extends keyof T
      ? PathValue<T[K], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never;

type A = PathValue<User, "name">;          // string
type B = PathValue<User, "address.city">;  // string
type C = PathValue<User, "address.zip">;   // number

// Type-safe getter
function get<T, P extends Path<T>>(obj: T, path: P): PathValue<T, P> {
  return path.split(".").reduce((o: any, k) => o?.[k], obj);
}`}</code>
          </pre>
        </section>

        {/* Variadic Tuple Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Variadic Tuples</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Spread in function params
type Fn<Args extends any[], R> = (...args: Args) => R;

function curry<A, B extends any[], R>(
  fn: Fn<[A, ...B], R>,
  a: A
): Fn<B, R> {
  return (...b) => fn(a, ...b);
}

// Zip two tuples
type Zip<A extends any[], B extends any[]> =
  A extends [infer AF, ...infer AR]
    ? B extends [infer BF, ...infer BR]
      ? [[AF, BF], ...Zip<AR, BR>]
      : []
    : [];

type Z = Zip<[1, 2, 3], ["a", "b", "c"]>;
// [[1, "a"], [2, "b"], [3, "c"]]

// Flatten one level
type Flatten<T extends any[]> =
  T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...F, ...Flatten<R>]
      : [F, ...Flatten<R>]
    : [];

type F = Flatten<[[1, 2], [3, 4], 5]>;  // [1, 2, 3, 4, 5]`}</code>
          </pre>
        </section>

        {/* React Types */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">React Types</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`import { 
  FC, ReactNode, ComponentProps, ComponentPropsWithRef, 
  HTMLAttributes, ButtonHTMLAttributes, 
  MouseEventHandler, ChangeEventHandler, FormEventHandler
} from "react";

// Component with children
type PropsWithChildren<P = {}> = P & { children?: ReactNode };

// Extract component props
type ButtonProps = ComponentProps<"button">;
type MyButtonProps = ComponentProps<typeof MyButton>;

// HTML element props
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

// Event handlers
const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {};
const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {};
const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {};

// Polymorphic component
type PolymorphicProps<E extends React.ElementType, P = {}> = P & 
  Omit<ComponentPropsWithRef<E>, keyof P> & { as?: E };

function Button<E extends React.ElementType = "button">({ 
  as, 
  ...props 
}: PolymorphicProps<E, { variant?: "primary" }>) {
  const Component = as || "button";
  return <Component {...props} />;
}

// Usage
<Button>Click</Button>
<Button as="a" href="/link">Link</Button>`}</code>
          </pre>
        </section>

        {/* Declaration Merging */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-cyan-400">Declaration Merging</h3>
          <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm">
            <code>{`// Extend existing interfaces
declare global {
  interface Window {
    myApp: { version: string };
  }
}

window.myApp.version;  // ✓

// Extend Express Request
declare namespace Express {
  interface Request {
    user?: { id: string; role: string };
  }
}

// Module augmentation
declare module "some-library" {
  interface SomeInterface {
    newProperty: string;
  }
}

// Extend Array
interface Array<T> {
  customMethod(): T[];
}

Array.prototype.customMethod = function() {
  return this;
};`}</code>
          </pre>
        </section>

        {/* Navigation */}
        <nav className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 mb-4">Cheatsheets</p>
          <div className="flex justify-center gap-4">
            <a
              href="/react-examples"
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
            >
              React
            </a>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              TypeScript
            </span>
          </div>
        </nav>

        <footer className="text-center text-gray-500 pt-8">
          <p>TypeScript Cheatsheet</p>
        </footer>
      </div>
    </div>
  );
}
