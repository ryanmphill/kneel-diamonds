// Set the initial state for the customers' orders
const transientState= {
    timestamp: 0,
    metalId: 0,
    sizeId: 0,
    styleId: 0
}
////////////////////////////////////////////////
// Export Functions to save choices ////////////
////////////////////////////////////////////////
export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setTime = () => {
    const currentDate = new Date()
    const timeStamp = currentDate.getTime()
    transientState.timestamp = timeStamp

}
/////////////////////////////////////////////////

export const placeOrder = async () => {
    // Define a postOptions object to specify a POST to the database
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState) // Turn the data into a string
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    // Broadcast a custom event that the state has changed so the browser can listen and update
    const customEvent = new CustomEvent("orderSubmitted")
    document.dispatchEvent(customEvent)
}