const nums: Array<number> = [1, 2, 3, 34, 43, 12];
const nums2: number[] = [1, 2, 3];

const nums3 = [...nums];

nums3.push(4);

console.log(nums3);
console.log(nums); // [1,2,3]

const people = [{ name: "Jason" }, { name: "Boaz" }];
const newPeople = [...people];
newPeople.push({ name: "Kristian" });

console.log(people);
console.log(newPeople);

const newerPeople = JSON.parse(JSON.stringify(people));
const newestPeople = structuredClone(people);
people[0].name = "Bee";
console.log(people);
console.log(newPeople);
console.log(newerPeople);
console.log(newestPeople);

console.log(nums);
const newArray = nums
  .map<boolean>((num) => num > 3)
  .map<0 | 1>((num) => (num ? 1 : 0));
console.log(newArray);
