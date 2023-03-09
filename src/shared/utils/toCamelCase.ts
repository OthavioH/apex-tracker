export default function camelize(str:String) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word:String, index:number) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

declare global {
    interface String {
        toCamelCase(): String ;
    }
}
