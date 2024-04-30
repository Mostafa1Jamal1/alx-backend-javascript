export default function createInt8TypedArray(length, position, value) {
  const array = new DataView(new ArrayBuffer(length));
  try {
    array.setInt8(position, value);
  } catch (err) {
    throw new Error('Position outside range');
  }
  return array;
}
