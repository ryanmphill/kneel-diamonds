
const convertDate = (timestamp) => {
    let date = new Date(timestamp)

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes} on ${month}/${day}/${year}`
    return formattedTime
}

export const Orders = async () => {
    // Get the orders data with expanded size, style, and metal foreign keys
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type")
    const orders = await fetchResponse.json()

    let ordersHTML = ""

    if (orders.length >= 1) {
        let divStringArray = orders.map(
            (order) => {
                // Convert timestamp to date and time
                const time = convertDate(order.timestamp)
                // Add together all the prices for each order
                const initialOrderPrice = order.metal.price + order.style.price + order.size.price
                // Modify the price with the multiplier based on the jewelry type chosen
                const totalPrice = initialOrderPrice * order.type.priceMultiplier
                // Display the orders in an HTML div
                return `<div class="order">Order #${order.id} costs $${totalPrice.toFixed(2)} and was placed at ${time}</div>`
            }
        )
        ordersHTML = divStringArray.join("")
    } else {
        ordersHTML = `<div class="order">There are currently no orders placed</div>`
    }

    return ordersHTML    
}
