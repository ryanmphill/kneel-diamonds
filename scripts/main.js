import { MetalOptions } from "./MetalOptions.js"
import { PlaceOrderButton } from "./PlaceOrder.js"
import { Orders } from "./PlacedOrderList.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"
import { typeOptions } from "./TypeOptions.js"


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const orderButtonHTML = PlaceOrderButton()
    const orderListHTML = await Orders()
    const jewelryTypeHTML = await typeOptions()

    const container = document.querySelector("#container")

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="jewelryTypes">
            <h4>Jewelry Category</h4>
            ${jewelryTypeHTML}
        </article>

        <article class="order">
            ${orderButtonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orderListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("orderSubmitted", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})