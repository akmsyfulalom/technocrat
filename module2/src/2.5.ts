{
  //function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = createArray("bangladesh");
  const result2 = createArrayWithGeneric<boolean>(true);
  const resultObj = createArrayWithGeneric<{ id: number; name: string }>({
    id: 123,
    name: "akm",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resultObj = createArrayWithTuple<string, number>("bd", 12);

  const addCourseToStudent = <T>(student: T) => {
    const course = " Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "x",
    email: "emaol",
    devType: "next level",
  });
  const student2 = addCourseToStudent({
    name: "y",
    email: "emal",
    devType: "next level",
    handWatch: "apple watch",
  });

  //
}
