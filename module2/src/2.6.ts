{
    //constraints 
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
        const course = " Next Level Web Development";
    
        return {
          ...student,
          course,
        };
      };
    
      const student1 = addCourseToStudent({
        id: 12,
        name: "x",
        email: "emaol",
        devType: "next level",
      });
      const student2 = addCourseToStudent({
        id: 23, 
        name: "y",
        email: "emal",
        handWatch: "apple watch",
      });


      const student3 = addCourseToStudent({id: 23, 
        name: "y",
        email: "emal",})




    //
}