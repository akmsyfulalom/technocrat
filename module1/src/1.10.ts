{
    // union types

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
    // type FullStackDeveloper = 'frondendDeveloper' | 'fullStackDeveloper'


    // type Developer = FrontendDeveloper | FullStackDeveloper


    // const newDeveloper : FrontendDeveloper = 'juniorDeveloper'


    // type User = {
    //     name: string;
    //     email?: string;
    //     bloodGroup: "O+"| "AB"| "A+";
    //     gender: "male"| "female";
    // }

    // const user: User = {
    //     name: "ak",
    //     email: "aggag@djjd.com",
    //     gender: "male",
    //     bloodGroup: "O+"
    // }



    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer"
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    }; 


    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["HTML", "CSS", "JS", "NODE.JS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }



}