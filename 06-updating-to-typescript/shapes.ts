export const PI = 3.14;

interface Shape {
  area?: number;
  type: "circle" | "rectangle" | "rightTriangle" | "square";
}

interface Circle extends Shape {
  type: "circle";
  radius: number;
}

export interface Rectangle extends Shape {
  length: number;
  width: number;
  type: "rectangle";
}

export interface RightTriangle extends Shape {
  base: number;
  height: number;
  type: "rightTriangle";
}

export interface Square extends Shape {
  width: number;
  type: "square";
}

function getCircleArea(radius) {
  return radius * radius * PI;
}

function getRectangleArea(length, width) {
  return length * width;
}

function getSquareArea(width) {
  return getRectangleArea(width, width);
}

function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}

function getArea(shape) {
  switch (shape.type) {
    case "circle":
      return getCircleArea(shape.radius);
    case "rectangle":
      return getRectangleArea(shape.length, shape.width);
    case "square":
      return getSquareArea(shape.width);
    case "rightTriangle":
      return getRightTriangleArea(shape.base, shape.height);
  }
}

const circle: Circle = { type: "circle", radius: 4 };
circle.area = getArea(circle);
console.log(circle);

const rectangle = { type: "rectangle", length: 7, width: 4 };
rectangle.area = getArea(rectangle);
console.log(rectangle);

const square = { type: "square", width: 5 };
square.area = getArea(square);
console.log(square);

const rightTriangle = { type: "rightTriangle", base: 9, height: 4 };
rightTriangle.area = getArea(rightTriangle);
console.log(rightTriangle);
