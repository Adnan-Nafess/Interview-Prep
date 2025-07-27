
const OptinalChannig = () => {

    let user = {
        name: "John",
        // address: {
        //     city: "New York"
        // }
    };

  return (
    <div>
        <h1>OptinalChannig</h1>
        <p>{user?.address?.city}</p>
    </div>
  )
}

export default OptinalChannig