// solution 1

const filterEvenNumbers = (numbers: number[]) => {
    return numbers.filter(number => number % 2 === 0)
}

// solution 2

const reverseString = (input: string) => {
    return input.split('').reverse().join('')
}

// solution 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
    if (typeof input === 'string') {
        return 'String'
    } else {
        return 'Number'
    }
}

// solution 4 


const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key]
}


//solution 5

interface Book {
    title: string;
    author: string;
    publishedYear: number
}


const toggleReadStatus = (book: Book) => {
    return { ...book, isRead: true }
}

// solution 6

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade:string){
        super(name, age)
        this.grade = grade
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade} `
    }
}
const student = new Student("Alice", 20, "A");



// solution 7

const getIntersection = (arr1: number[], arr2: number[]) =>{
    const result = arr1.filter(num=> arr2.includes(num))
    return result
}



