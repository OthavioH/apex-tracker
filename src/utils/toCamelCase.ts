export default function camelize(str:string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word:string, index:number) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

// create a toCamelCase extension to string type

declare global {
    interface String {
        toCamelCase(): string ;
    }
}
