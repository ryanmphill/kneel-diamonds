// Set the initial state for the customers' orders
const transientState= {
    timestamp: 0,
    metalId: 0,
    sizeId: 0,
    styleId: 0,
    typeId: 0
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

export const setTypeChoice = (chosenType) => {
    transientState.typeId = chosenType
    console.log(transientState)
}
// Export function to set the time order was placed //////////////////////
export const setTime = () => {
    const currentDate = new Date()
    const timeStamp = currentDate.getTime()
    transientState.timestamp = timeStamp
    console.log("Order placed, timestamp set...")
    console.log(transientState)
}

//////////////////////////////////////////////////////////////////
// Define function to reset transient state to default ///////////
//////////////////////////////////////////////////////////////////
const resetTransientState = () => {
    transientState.timestamp = 0
    transientState.metalId = 0
    transientState.sizeId = 0
    transientState.styleId = 0
    transientState.typeId = 0
    console.log("Transient state has been reset... ")
    console.log(transientState)
}

////////////////////////////////////////////////////////////////////////////
// Export function to POST order to API ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
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

    // Reset transientState to its default value ///////////////////////////
    resetTransientState() //////////////////////////////////////////////////
}