document.addEventListener("DOMContentLoaded", function(event) {

    let page = document.getElementsByTagName('body')[0]

    let backgroundColorChangingDiv = document.createElement('div')
    backgroundColorChangingDiv.className = "color-changing"
    page.append(backgroundColorChangingDiv)

    let colorCode = document.createElement('h4')
    let backgroundColorTitle = document.createElement('h3')
    backgroundColorTitle.innerHTML = "The background is currently"
    backgroundColorChangingDiv.append(backgroundColorTitle,colorCode)

    let colorChaningButton = document.createElement('button')
    colorChaningButton.className = 'button'
    colorChaningButton.innerHTML = 'Change the background color!'
    backgroundColorChangingDiv.append(colorChaningButton)

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        page.style.backgroundColor = "#" + randomColor;
        colorCode.innerHTML = '#' + randomColor
      }
      
    colorChaningButton.addEventListener("click", setBg);
    setBg();

    let quotesDiv = document.createElement('div')
    quotesDiv.className = "quotes"
    page.append(quotesDiv)

    let quote = document.createElement('p')
    let quoteAuthor = document.createElement('h4')
    let quoteTitle = document.createElement('h3')
    quoteTitle.innerHTML = "Random Tech Quote"
    quotesDiv.append(quoteTitle,quote, quoteAuthor)

    let quoteChaningButton = document.createElement('button')
    quoteChaningButton.className = 'button'
    quoteChaningButton.innerHTML = 'Change the quote!'
    quotesDiv.append(quoteChaningButton)

    const getQuote = () => {
      fetch('http://quotes.stormconsultancy.co.uk/random.json')
        .then(response => response.json())
        .then(data => {
          quote.innerHTML = data.quote
          quoteAuthor.innerHTML = data.author 
        });
    }
    
  quoteChaningButton.addEventListener("click", getQuote);
  getQuote();

})