let userName:string

// userName=10

userName = 'Max';

let userAge = 34;

let isValid = true;

// string, number, boolean

let userID:string|number

userID="ACD3$t"
userID=5


//let user:object
let user:{
    name:string,
    age:number,
    isAdmin:boolean,
    id:string|number
}


user={
    name:'ahmed',
    age:10,
    isAdmin:true,
    id:'1452asas'
}

// user={}
////////////Array Types////////////////
let hoppies:Array <string> //string[] ,number[],boolean[]

hoppies=["asas","asas","asassa"]

/////////////FUNCTION /////////////////////
                                // if the function doesn't return somthing we make it void or undifined 
                                //but if the function return somthing we but it in return are 
                                //number or string 
function add(a:number,b:number) :number {
    const result =a+b
    // console.log(result);
    return result
}
