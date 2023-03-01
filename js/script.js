

let moneyVal = document.getElementById('money-val')
let moneyPrice = document.getElementById('money-price')

let money = document.getElementById('money')

window.addEventListener('load', ()=>{
   let url = `https://api.exchangerate.host/latest`


         axios.get(url , {
            params: {
               base: "USD",
               symbols: "UAH,EUR",
            }
         })
               .then(function (response) {
                  let allRates = response.data.rates
                  console.log(allRates);
                  for (const key in allRates) {
                     if (Object.hasOwnProperty.call(allRates, key)) {
                        const element = allRates[key];
                        let num = response.data.rates[key]
                        money.insertAdjacentHTML('beforeend', `
                        <li class="splide__slide">
                        <span class="span-val" id="money-val">${key}/USD &nbsp</span>
                        <span class="span-price" id="money-price">${num.toFixed(2)} &nbsp</span>

                        </li>
                        `)
                        // moneyPrice.innerText = Math.round(response.data.rates[key])
                     }
                  }



                  // console.log(allRates);
                  // // handle success
                  // moneyPrice.innerText = Math.round(response.data.rates["UAH"])
                  // console.log(Math.round(response.data.rates["UAH"]));
               })
               .catch(function (error) {
                  // handle error
                  console.log("error");
               })
})

window.addEventListener('load', ()=>{
   let url = `https://api.exchangerate.host/latest`


         axios.get(url , {
            params: {
               base: "BTC",
               symbols: "USD",
            }
         })
               .then(function (response) {
                  let allRates = response.data.rates
                  console.log(allRates);
                  for (const key in allRates) {
                     if (Object.hasOwnProperty.call(allRates, key)) {
                        const element = allRates[key];
                        let num = response.data.rates[key]
                        money.insertAdjacentHTML('beforeend', `
                        <li class="splide__slide">
                        <span class="span-val" id="money-val">${key}/BTC &nbsp</span>
                        <span class="span-price" id="money-price">${num.toFixed(2)} &nbsp</span>

                        </li>
                        `)
                        // moneyPrice.innerText = Math.round(response.data.rates[key])
                     }
                  }



                  // console.log(allRates);
                  // // handle success
                  // moneyPrice.innerText = Math.round(response.data.rates["UAH"])
                  // console.log(Math.round(response.data.rates["UAH"]));
               })
               .catch(function (error) {
                  // handle error
                  console.log("error");
               })
})



