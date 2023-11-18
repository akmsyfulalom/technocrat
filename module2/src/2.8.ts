{
    //promise 
// semulate 

type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const getTodo  = async() : Promise<Todo>=>{
    const  response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const data = await response.json()
    return data 
    // console.log(data)
}

getTodo()

type Something = {something: string}


    const createPropmise = (): Promise<Something> =>{
        return new Promise<Something>((resolve, reject) =>{
            const data : Something = {something: " something my data for example"}
            if(data){
                resolve(data)
            }else{
                reject("failed to load data")
            }
        })
    }




// calling promiuse function 
const showData  = async() : Promise<Something> =>{
    const data :Something = await createPropmise()
    return data
    // console.log(data)
}

showData()


    //
}