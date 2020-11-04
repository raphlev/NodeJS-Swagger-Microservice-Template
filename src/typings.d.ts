// In order to be able to import json and TS will compile it to js module with require()
declare module '*.json' {
  const value: any;
  export const name: string;
  export default value;
}
// In order to be able to import js and TS will compile it to js module with require()
declare module '*.js' {
  const value: any;
  export const name: string;
  export default value;
}
