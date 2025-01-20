type NewType = string;
interface NewInterface {}

{
  type VALID_API_VALUE = number | string | boolean;

  let result: VALID_API_VALUE = 1;

  interface API_RESULT {
    results: number;
    items: VALID_API_VALUE[]; // Array<VALID_API_VALUE>
    other_items: Array<VALID_API_VALUE>;
  }

  type TYPED_API_RESULT = {
    results: number;
    items: VALID_API_VALUE[]; // Array<VALID_API_VALUE>
    other_items: Array<VALID_API_VALUE>;
  };

  type BirdType = {
    wings: 2 | 4 | 6;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2; // Structural Typing
  // Duck Typing
  // If it looks like a duck, a walks a duck, and sounds like a duck it's a duck

  type Owl = BirdType & { nocturnal: true }; // Intersection
  type Robin = BirdInterface & { nocturnal: true };

  interface Chicken extends BirdInterface {
    colourful: false;
    flies: false;
  }

  interface Peacock extends BirdType {
    colourful: true;
    flies: false;
  }

  // type Robin = Robin & { colourfulBreast: true };
  interface Chicken {
    laysEggs: true;
  }

  let peacock: Peacock = { colourful: true, flies: false, wings: 2 };
  let owl: Owl = { wings: 2, nocturnal: true };
  let chicken: Chicken = {};
  let other: Owl = {};
}

{
  const name = "";
}
