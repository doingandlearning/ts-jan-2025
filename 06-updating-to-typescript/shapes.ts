import { getArea } from "./shape.utils";
import type { Circle, Rectangle, Square, RightTriangle } from "./shape.types";

const circle: Circle = { type: "circle", radius: 4 };
circle.area = getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
rectangle.area = getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
square.area = getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
rightTriangle.area = getArea(rightTriangle);
console.log(rightTriangle);
