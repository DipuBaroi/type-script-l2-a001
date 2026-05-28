// Title:  How Generics  allow to build reuseable components and functions that stay strictly typed regardless of the data structures passed in.......


// Introduction: Generics in TypeScript allow developers to creat reuseable function and components while maintaining strict type satety. Instead of using `any` generics preserve the type of data passed into function.

// Body

without Generics
```ts
function identity(value:any){
    return value;
}
This removes type safety.

With Generics

</> TypeScript

function identity <T> (value: T): T {
    return value
}

usege

</> TypeScript

identity <string> ('Hello')
identity <number> (10)

Real World Example

</> TypeScript

function getFirstElement <T> <arr: T[]:T>{
    return arr[0]
}

usege:

</> TypeScript

GetFirstElement <number> ([1, 2, 3]);
getFirstElement <string> (['a', 'b']);

// Conclusion: GEnerics make TypeScript flexible yet safe. They allow reusable logic without losing type information, making them essential for scaleable application.


