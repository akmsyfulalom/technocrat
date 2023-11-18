//Dustucturing

{
    const user = {
        id: 1234,
        name: {
          fNmae: "akm",
          mName: "syfil",
          lName: "alom",
        },
        contact: "01751760872",
        address: "Sylhet BD",
      };
      
      const { contact, name: {fNmae, } } = user;



      //array distucturing 

      const myFriends = ["a", "b", "d", "e", "f", "g"];

      const [,, bestFriend, ...rest] = myFriends
}
