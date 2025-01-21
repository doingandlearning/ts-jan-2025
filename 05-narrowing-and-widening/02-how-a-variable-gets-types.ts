type Vector3 = {
  x: number;
  y: number;
  z: number;
};

type Axis = "x" | "y" | "z";

function getComponent(vector: Vector3, axis: Axis) {
  return vector[axis];
}
// 3x, 2y, 4x
// getComponent( . , "x") => 3

let vec = { x: 10, y: 20, z: 30 };
// let axis: Axis = "x"; // Type definition
const axis = "x"; // use const

getComponent(vec, axis as Axis); // Type Assertion - heavy hammer!
getComponent(vec, axis);
