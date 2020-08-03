document.addEventListener("DOMContentLoaded", function(event) {

    let page = document.getElementsByTagName('body')[0]

    let backgroundColorChangingDiv = document.createElement('div')
    backgroundColorChangingDiv.className = "color-changing"
    page.append(backgroundColorChangingDiv)

    let colorCode = document.createElement('h4')
    let backgroundColorTitle = document.createElement('h3')
    backgroundColorTitle.innerHTML = "The background is currently"
    backgroundColorChangingDiv.append(backgroundColorTitle,colorCode)

    let button = document.createElement('button')
    button.className = 'button'
    button.innerHTML = 'Change the background color!'
    backgroundColorChangingDiv.append(button)

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        page.style.backgroundColor = "#" + randomColor;
        colorCode.innerHTML = '#' + randomColor
      }
      
      button.addEventListener("click", setBg);
      setBg();

})