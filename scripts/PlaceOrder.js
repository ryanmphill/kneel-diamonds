import { placeOrder, setTime } from "./TransientState.js"

// Define an event listener to handle the order submission
const handleOrder = (clickEvent) => {
    // Check if the order button was clicked
    if (clickEvent.target.id === "orderButton") {
        // Set the time for when order was placed
        setTime()
        placeOrder()
    }
}


/* Export a function that invokes the event listener and builds the HTML for
   the 'place order' button */
export const PlaceOrderButton = () => {
    
    document.addEventListener("click", handleOrder)
    
    return `<div><button id='orderButton'>Create Custom Order</button></div>`
}