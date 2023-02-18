
const getAdviceBtn = document.getElementById("getAdviceBtn")
const api = "	https://api.adviceslip.com/advice"

const cardTitle = document.getElementById("card__title")
const para = document.getElementById("advice__para")
const loader = `<div id="loader"><div></div><div></div></div>`

const card_container = document.getElementById("card__container")

window.addEventListener("load", () => {
    fetchData()
})
// getAdviceBtn.addEventListener("click", () => {
//     fetchData()
// })

const fetchData = () => {
    card_container.innerHTML = loader
    console.log("Fetching Data...")
    fetch(api)
        .then(res => res.json())
        .then(data => displayAdvice(data))
}
const displayAdvice = (data) => {
    let { id, advice } = data.slip
    console.log(id,advice)
    const card = `
    <section class="card">
        <h4 id="card__title">Advice #${id}</h4>
        <p id="advice__para">${advice}</p>
        <div class="pattern__divider"></div>
    </section>
    <button id="getAdviceBtn" onclick="fetchData()">
        <img src="./images/icon-dice.svg" />
    </button>`

    card_container.innerHTML = card
}