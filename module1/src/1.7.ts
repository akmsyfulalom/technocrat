{
  // spread operator
  // rest operetor
  // distucturing

  const bros1: string[] = ["mir", "hossing", "tonmoy"];
  const bros2: string[] = ["mi", "hossig", "tonoy"];

  bros1.push(...bros2);

  // spread operetor
  const mentors = {
    ts: "mezba",
    tdx: "mir",
  };

  const mentors2 = {
    prisma: "tonmoy",
    next: "firoz",
  };

  const mentorsList = {
    ...mentors,
    ...mentors2,
  };

  // rest operetor
  const friendsGreet = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(friend))
  };

  friendsGreet("abul", "tabul", "nebul");
}
