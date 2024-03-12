let userName:string

// userName=10

userName = 'Max';

let userAge = 34;

let isValid = true;

// string, number, boolean

type StringorNum= string|number

let userID:StringorNum

userID="ACD3$t"
userID=5


//let user:object
type UserObject={
    name:string,
    age:number,
    isAdmin:boolean,
    id:StringorNum
}

let user:UserObject


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


type AddFun=(a:number,b:number)=>number

function calculate(a:number,b:number,calcFn:AddFun){
calcFn(a,b)
}

calculate(2,5,add)




///////lec 18
interface Credentials{
    password:string,
    email:string
}

let cred:Credentials

cred={
    email:'test@gmai.com',
    password:'abc'
}


class AuthCredentials implements Credentials{
    password:string
    email:string
    userName:string

}

function login(credentials:Credentials) {
    
}

login (new AuthCredentials())

// type Admin = {
//   permissions: string[]
// };

// type AppUser = {
//   userName: string;
// }

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ['login'],
//   userName: 'Max'
// }

interface Admin {
    permissions: string[];
  }
  
  interface AppUser {
    userName: string;
  }
  
  interface AppAdmin extends Admin, AppUser {}
  
  let admin: AppAdmin;
  
  admin = {
    permissions: ['login'],
    userName: 'Max',
  };
  //21 - Merging Types
  type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';
//22 - Adding Type Guards
function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'number') {
      // ...
    }
  }