import { setMetalChoice } from "./TransientState.js"

/*
    Define the callback function for an event listener that targets a 'change' 
    when the user chooses their preferred metal

    since the value of the radio buttons is the string of
    metal Id numbers, you must convert the
    string to an actual number with parseInt() as seen below
*/
const handleMetalChoice = (event) => {
    // Check if the value of the item being changed is a metal
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}


// Export a function that builds the html for the metal choices and listens for the change event
export const MetalOptions = async () => {

    // Listen for the change event where the metal choice is being changed:
    document.addEventListener("change", handleMetalChoice)

    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let html = ""
    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    html += divStringArray.join("")

    return html
}