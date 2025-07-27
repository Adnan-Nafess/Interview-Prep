
const LogicalAnd = () => {
    const x = 10;
    const y = 20;

  return (
    <div>
        <h1>Logical And Operators</h1>
        <li>{x > 5 && y > 15 ? "Both conditions are true" : "At least one is false"}</li>
    </div>
  )
}

export default LogicalAnd;