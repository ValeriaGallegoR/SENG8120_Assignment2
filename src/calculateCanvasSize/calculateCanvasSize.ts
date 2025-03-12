export default function calculateCanvasSize(
  length: number,
  width: number
) {
  if (length < 0){
    throw new Error("Length should be positive");
  }
  return length * width;
}