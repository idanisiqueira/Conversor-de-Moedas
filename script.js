const convertButton = document.querySelector(".convert")
const secondSelect = document.querySelector(".second-select")
const firstSelect = document.querySelector(".first-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector("#valor-a-converter") // moedas acima
    const currencyValueConverted = document.querySelector("#valor-convertido") // moedas abaixo


    const dolar = 4.93

    const real = 1.00

    const euro = 5.30

    const libra = 6.17

    const bitcoin = 124245.86

    const iene = 0.034


    // sessão dólar para outras moedas

   if (secondSelect.value == "dolar" && firstSelect.value == "currency-real" ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(inputCurrencyValue),

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(inputCurrencyValue / dolar)
    }

    if (secondSelect.value == "dolar" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue)
        }

    if (secondSelect.value == "dolar" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue * 1.0750)
        }

    if (secondSelect.value == "dolar" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue * 1.2515)
        }
    
    if (secondSelect.value == "dolar" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue * 25202)
    }

    if (secondSelect.value == "dolar" && firstSelect.value == "currency-iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue * 0.0068)
    }
    
    // sessão real para outras moedas

    if (secondSelect.value == "real" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * dolar)
        }

    if (secondSelect.value == "real" && firstSelect.value == "currency-real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue)
        }

    if (secondSelect.value == "real" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * euro)
        }

    if (secondSelect.value == "real" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * libra)
        }

    if (secondSelect.value == "real" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),
          
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * bitcoin)
        }

    if (secondSelect.value == "real" && firstSelect.value == "currency-iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue * iene)
        }
    
    // sessão euro para outras moedas

    if (secondSelect.value == "euro" && firstSelect.value == "currency-real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue / euro)
        }

    if (secondSelect.value == "euro" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue * 0.9301)
        }

    if (secondSelect.value == "euro" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue)
        }

    if (secondSelect.value == "euro" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue * 1.1641)
        }

    if (secondSelect.value == "euro" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue * 42657)
        }

    if (secondSelect.value == "euro" && firstSelect.value == "currency-iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue * 0.006)
        }

    // sessão libra para outras moedas

    if (secondSelect.value == "libra" && firstSelect.value == "currency-real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue / libra)
        }

    if (secondSelect.value == "libra" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue * 0.7990)
        }

    if (secondSelect.value == "libra" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),
          
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue * 0.8589)
        }

    if (secondSelect.value == "libra" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue)
        }

    if (secondSelect.value == "libra" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue * 49659)
        }

    if (secondSelect.value == "libra" && firstSelect.value == "currency-iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue * 0.0055)
        }

    // sessão bitcoin para outras moedas

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / bitcoin)
        }

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / 24593)
        }

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / 42657)
        }

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / 49659)
        }

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue)
        }

    if (secondSelect.value == "bitcoin" && firstSelect.value == "currency-iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue / 27365)
        }

    // sessão iene para outras moedas

    if (secondSelect.value == "iene" && firstSelect.value == "currency-real" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
            }).format(inputCurrencyValue / iene)
        }

    if (secondSelect.value == "iene" && firstSelect.value == "currency-dolar" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
            }).format(inputCurrencyValue * 145)
        }

    if (secondSelect.value == "iene" && firstSelect.value == "currency-euro" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
            }).format(inputCurrencyValue * 155.88)
        }

    if (secondSelect.value == "iene" && firstSelect.value == "currency-libra" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GP", {
            style: "currency",
            currency: "GBP",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
            }).format(inputCurrencyValue * 181.47)
        }

    if (secondSelect.value == "iene" && firstSelect.value == "currency-bitcoin" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
          }).format(inputCurrencyValue),
          
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
            }).format(inputCurrencyValue * 3654)
        }

    if (secondSelect.value == "iene" && firstSelect.value == "currency-iene" ) {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
          }).format(inputCurrencyValue),

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
            }).format(inputCurrencyValue)
        }

}


function changeSecondSelect(){ // função para alterar a imagem das moedas do segundo seletor

    const currencyName = document.querySelector("#currency-dolar")
    const currencyImage = document.querySelector("#currency-img")

    if (secondSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dólar-logo.png"
    }

    if (secondSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro-logo.png"
    }

    if (secondSelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra-logo.png"
    }

    if (secondSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin-logo.png"
    }

    if (secondSelect.value == "iene") {
        currencyName.innerHTML = "Iene"
        currencyImage.src = "./assets/yene-logo.png"
    }

    if (secondSelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real-logo.png"
    }

    convertValues()
}

function changeFirstSelect (){ // função para alterar a imagem das moedas do primeiro seletor

    const currencyImage2 = document.querySelector("#currency-img2")
    const currencyName2 = document.querySelector("#currency-prime")

    if (firstSelect.value == "currency-dolar") {
        currencyName2.innerHTML = "Dólar Americano"
        currencyImage2.src = "./assets/dólar-logo.png"
    }

    if (firstSelect.value == "currency-euro") {
        currencyName2.innerHTML = "Euro"
        currencyImage2.src = "./assets/euro-logo.png"
    }

    if (firstSelect.value == "currency-libra") {
        currencyName2.innerHTML = "Libra Esterlina"
        currencyImage2.src = "./assets/libra-logo.png"
    }

    if (firstSelect.value == "currency-bitcoin") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImage2.src = "./assets/bitcoin-logo.png"
    }

    if (firstSelect.value == "currency-iene") {
        currencyName2.innerHTML = "Iene"
        currencyImage2.src = "./assets/yene-logo.png"
    }

    if (firstSelect.value == "currency-real") {
        currencyName2.innerHTML = "Real"
        currencyImage2.src = "./assets/real-logo.png"
    }

    convertValues()

}

secondSelect.addEventListener("change", changeSecondSelect) // evento quando o segundo seletor é alterado
firstSelect.addEventListener("change", changeFirstSelect) // evento quando o primeiro seletor é alterado

convertButton.addEventListener("click", convertValues) // evento quando o botão para converter é clicado
