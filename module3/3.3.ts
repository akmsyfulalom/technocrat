{
  //type guards

  // typeof --> type guard
  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add('2', '2');
  console.log(result1)



  type NormalUser = {
    name: string;
  }

  type AdminUser = {
    name: string;
    role: "admin"
  };


  const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user){
        
        console.log(`My name id ${user.name} and my role is ${user.role}`)
    }else{
        console.log(`My name id ${user.name} `)

    }
  }


  const normalUser : NormalUser = {
    name: "Mr normal user"
  };

  const adminUser : AdminUser = {
    name: "admin mr ",
    role: "admin"


  }

  getUser(normalUser)
  getUser(adminUser)
console.log(normalUser, adminUser)





  //
}
