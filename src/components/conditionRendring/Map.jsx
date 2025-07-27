function Maps() {
    const products = [
        {
            "id": 1,
            "name": "Apple iPhone 14",
            "price": 799,
            "category": "Electronics"
        },
        {
            "id": 2,
            "name": "Nike Running Shoes",
            "price": 120,
            "category": "Footwear"
        },
        {
            "id": 3,
            "name": "Levi's Jeans",
            "price": 60,
            "category": "Clothing"
        },
        {
            "id": 4,
            "name": "Samsung Galaxy Tab",
            "price": 299,
            "category": "Electronics"
        },
        {
            "id": 5,
            "name": "Fastrack Watch",
            "price": 75,
            "category": "Accessories"
        },
        {
            "id": 6,
            "name": "Roadster T-Shirt",
            "price": 25,
            "category": "Clothing"
        }
    ];

    const names = ["bob", "alice", "bob", "alice", "charlie"];
    
    return (
        <div>
            <h2>Rendering Lists and Conditional Operators</h2>
            <ul>
                {
                    products.map((item) => (
                        <li key={item.id}>
                            <strong>{item.name}</strong> - ${item.price} - Category: ${item.category}
                        </li>
                    ))
                }
            </ul>

            {/* Filtering */}
            <h1>Filtering List</h1>
            <ul>
                {products.filter((item) => item.category === "Electronics").map((item) => (
                    <li key={item.id}>
                        <strong>{item.name}</strong> -${item.price} - Category: ${item.category}
                    </li>
                ))}
            </ul>

            {/* Total Value */}
            <h1>Total Value</h1>
            <p>
                Total Price Summary: ${" "}
                {
                    products.reduce((acc, product) => {
                        return acc + product.price
                    }, 0)
                }
            </p>

            {/* filter unique names in arrays */}
            <h1>Find Unique element an array</h1>
            {
                names.filter((name, index) => (
                    names.indexOf(name) === index
                ))
                .map((name) => (
                    <li key={name.id}>{name}</li>
                ))
            }
        </div>
    )
}

export default Maps;