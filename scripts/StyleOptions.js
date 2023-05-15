import { setStyleChoice } from "./TransientState.js"

/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred style

    since the value of the radio buttons is the string of
    style Id numbers, you must convert the
    string to an actual number with parseInt() as seen below
*/
const handleStyleChoice = (choiceEvent) => {
    // Check if the value of the item being changed is a style
    if (choiceEvent.target.name === "style") {
        setStyleChoice(parseInt(choiceEvent.target.value))
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Export a function that builds the html for the available styles and listens for when a choice is changed
export const StyleOptions = async () => {

    // Listen for the change event where the style choice is being changed:
    document.addEventListener("change", handleStyleChoice)

    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let html = ""
    
    const divStringArray = styles.map(
        (styleObject) => {
            return `<div><input type='radio' name='style' value='${styleObject.id}' /> ${styleObject.style}</div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")

    return html
}