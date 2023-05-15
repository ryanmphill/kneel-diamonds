// Set the initial state for the customers' orders
const transientState= {
    timestamp: 0,
    metalId: 0,
    styleId: 0,
    sizeId: 0
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
/////////////////////////////////////////////////