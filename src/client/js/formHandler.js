function buttonClicked(event) {
    event.preventDefault();
    console.log('Button was clicked. Sending Request to API.');
    /* // check what text was put into the form field
    let formText = document.getElementById('name').value
    myLib.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })*/
}

export { buttonClicked };