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
// In order to avoid:
// Could not find a declaration file for module 'cors'. '/media/raph/SD/ws/NodeJS-Swagger-Microservice-Template/node_modules/cors/lib/index.js' implicitly has an 'any' type.
// Try `npm install @types/cors` if it exists or add a new declaration (.d.ts) file containing `declare module 'cors';`ts(7016)
declare module 'cors'
declare module 'debug-level'
