import { MetalOptions } from "./MetalOptions.js"
import { SizeOptions } from "./SizeOptions.js"
import { StyleOptions } from "./StyleOptions.js"


const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()

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

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}

render()