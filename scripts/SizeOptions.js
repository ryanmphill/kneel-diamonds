import { setSizeChoice } from "./TransientState.js"


/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred size

    since the value of the radio buttons is the string of
    size Id numbers, you must convert the
    string to an actual number with parseInt() as seen below
*/
const handleSizeChoice = (choiceEvent) => {
    // Check if the value of the item being changed is a size
    if (choiceEvent.target.name === "size") {
        setSizeChoice(parseInt(choiceEvent.target.value))
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export a function that builds the html for the available sizes and listens for when a choice is changed
export const SizeOptions = async () => {

    // Listen for the change event where the size choice is being changed:
    document.addEventListener("change", handleSizeChoice)

    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let html = ""
    const divStringArray = sizes.map(
        (sizeObject) => {
            return `<div><input type='radio' name='size' value='${sizeObject.id}' /> ${sizeObject.carets} carets</div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")   
    
    return html
}