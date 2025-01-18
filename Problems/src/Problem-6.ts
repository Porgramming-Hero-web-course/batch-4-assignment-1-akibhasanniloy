{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, Update: Partial<Profile>): Profile {
    return { ...profile, ...Update };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
