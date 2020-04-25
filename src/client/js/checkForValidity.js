function checkForValidity(suspect) {
    var validUrl = require('valid-url');

    console.log("::: Running checkForValidity :::", suspect);

    if (validUrl.isUri(suspect)) {
        console.log('Looks like an URI');
    } else {
        console.log('Not a valid URI');
        alert('Not a valid URI');
    }
}

export { checkForValidity }