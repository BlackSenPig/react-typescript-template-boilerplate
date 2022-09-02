declare module "*.png";
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.json" {
  const value: any;
  export default value;
}

declare module "history" {
  export type Pathname = keyof typeof routes;
}