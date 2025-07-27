
const NullishOperator = () => {
    const userInput = null;
    // const userInput = "Hello User";
    const defaultValue = "Hello default value";
  return (
    <div>
        <h1>NullishOperator</h1>
        <p>{userInput ?? defaultValue}</p>
    </div>
  )
}

export default NullishOperator