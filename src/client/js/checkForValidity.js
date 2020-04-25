function checkForValidity(inputText) {
    console.log("::: Running checkForValidity :::", inputText);
    let validOptions = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {
        console.log('Valid Option')
    } else {
        console.log('Error: You choose a wrong option!')
    }
}

export { checkForValidity }