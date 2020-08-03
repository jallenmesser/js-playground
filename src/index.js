document.addEventListener("DOMContentLoaded", function(event) {

    let page = document.getElementsByTagName('body')[0]
    let button = document.createElement('button')
    button.innerHTML = 'I change the background color!'
    page.append(button)

    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        page.style.backgroundColor = "#" + randomColor;
      }
      
      button.addEventListener("click", setBg);
      setBg();

})