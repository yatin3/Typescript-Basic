// this is a problem becoz typescript is not recognizing it as number and we are calling string method split so use generics

function insertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray,-1); //[-1,1,2,3]

updatedArray[0].split('');

// generics

function insertAtBeginningOfArray<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const givenArray = [1,2,3];
const updatedNewArray = insertAtBeginningOfArray(demoArray,-1); //[-1,1,2,3]
const stringArray = insertAtBeginningOfArray(['a','b','c'],'d');
