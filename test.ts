// tests go here; this will not be compiled when this package is used as an extension.

let mylist = [1,2]

replaceValue(1,5)

console.log(mylist)


let dict = Dictionary.create(["word"], [1])
Dictionary.replaceValue(dict, "word", 2)
console.log(Dictionary.get_values_list(dict))


function replaceValue(value: any, newValue: any): void {
    let index = mylist.indexOf(value);
    if(index != -1) {
        mylist[index] = newValue;
    }
}