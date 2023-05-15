
const convertDate = (timestamp) => {
    let date = new Date(timestamp)

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedTime = `${hours}:${minutes} on ${month}-${day}-${year}`
    return formattedTime
}

export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    let ordersHTML = ""

    if (orders.length >= 1) {
        let divStringArray = orders.map(
            (order) => {
                const time = convertDate(order.timestamp)
                return `<div class="order">Order #${order.id} at ${time}</div>`
            }
        )
        ordersHTML = divStringArray.join("")
    } else {
        ordersHTML = `<div class="order">There are currently no orders placed</div>`
    }

    return ordersHTML    
}