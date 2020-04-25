function buttonClicked(event) {
    event.preventDefault();
    console.log('Button was clicked. Sending Request to API.');

    let formText = document.getElementById('name').value;
    console.log(formText);
    myLib.checkForValidity(formText);


    console.log("::: Form Submitted :::");
    fetch('http://localhost:8080/analyze', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: formText })
        })
        .then(function(res) {
            return res.json()
        })
        .then(function(res) {
            console.log(res)
            document.getElementById("polarity").innerHTML = res.polarity + '   with a polarity confidence of ' + res.polarity_confidence;
            document.getElementById("subjectivity").innerHTML = res.subjectivity + '   with a subjectivity confidence of ' + res.subjectivity_confidence;
        })



    //.then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { buttonClicked };