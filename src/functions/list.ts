export function itensFromArray1InArray2(array1: unknown[], array2: unknown[]) {
  return array1.every((itemArray1) => array2.includes(itemArray1));
}
