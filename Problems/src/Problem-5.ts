{
  //
  function getProperty<T, k extends keyof T>(obj: T,key: k):T[k]{
    return obj[key];
  }
  const person={name:"Alice",age:20};
  console.log(getProperty(person,"name"));

  //
}
