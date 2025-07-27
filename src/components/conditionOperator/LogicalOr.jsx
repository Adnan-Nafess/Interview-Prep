
const LogicalOr = () => {
    const x = 10;
    const y = 20;

  return (
    <div>
        <h1>Logical Or Operators</h1>
        <li>{x > 10 || y > 10 ? "At least one is greater than 10" : "Both are less or equal to 10"}</li>
    </div>
  )
}

export default LogicalOr