export const PI = 3.14;
import type {
  Circle,
  Rectangle,
  Square,
  RightTriangle,
  Shape,
} from "./shape.types";

function getCircleArea(circle: Circle) {
  const radius = circle.radius;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle): number {
  const { length, width } = rectangle;
  return length * width;
}
function getSquareArea(square: Square): number {
  const { width } = square;
  return width * width;
}

function getRightTriangleArea(triangle: RightTriangle): number {
  const { base, height } = triangle;
  return (base * height) / 2;
}

function isCircle(shape: Shape): shape is Circle {
  return shape.type === "circle";
}

function isShape(shape: any): shape is Shape {
  return ["circle", "rectangle", "rightTriangle", "square"].includes(
    shape.type
  );
}

export function getArea(shape: unknown) {
  if (!isShape(shape)) {
    throw new Error("Need to be a shape");
  }
  if (isCircle(shape)) {
    return getCircleArea(shape);
  }
  switch (shape.type) {
    case "circle":
      return getCircleArea(shape as Circle);
    case "rectangle":
      return getRectangleArea(shape as Rectangle);
    case "square":
      return getSquareArea(shape as Square);
    case "rightTriangle":
      return getRightTriangleArea(shape as RightTriangle);
  }
}
