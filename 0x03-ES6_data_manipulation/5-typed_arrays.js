export default function createInt8TypedArray(length, position, value) {
  const array = new DataView(new ArrayBuffer(length));
  array.setInt8(position, value);
  return array;
}
