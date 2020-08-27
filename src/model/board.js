import { times } from "lodash";

// TODO: generate this
const solution = [
  [2, 4, 3, 1],
  [1, 3, 2, 4],
  [4, 2, 1, 3],
  [3, 1, 4, 2],
];

export function createBoard(size) {
  const rows = solution.map((row) => row.slice());
  return {
    size,
    rows,
  };
}
