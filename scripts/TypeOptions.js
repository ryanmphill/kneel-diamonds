import { setTypeChoice } from "./TransientState.js"

////////////////////////////////////////////////////////////////////////////////////
// Define the callback function for an event listener that targets a 'change' //////
// when the user chooses their preferred type //////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
const handleTypeChoice = (event) => {
    // Check if the value of the item being changed is a type
    if (event.target.name === "type") {
        setTypeChoice(parseInt(event.target.value))
    }
}

/////////////////////////////////////////////////////////////////////////////////////
// Export a function that builds the html for the type choices and listens ////////// 
// for the change event /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
export const typeOptions = async () => {

    // Listen for the change event where the type choice is being changed:
    document.addEventListener("change", handleTypeChoice)

    const response = await fetch("http://localhost:8088/types")
    const types = await response.json()

    let html = ""
    // Use map() to generate new array of strings
    const typeStringArray = types.map(
        (type) => {
          return `<input type='radio' name='type' value='${type.id}' /> ${type.name}`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += typeStringArray.join("")

    return html
}