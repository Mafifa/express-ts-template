// Example of a helper function

export default function name(...props: number[]) {
  const sum = props.reduce((total, current) => total + current, 0)
  return sum
}
