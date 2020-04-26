function checkForValidity(suspect) {
    var validUrl = require('valid-url');

    console.log("::: Running checkForValidity :::", suspect);

    if (validUrl.isUri(suspect)) {
        //'Looks like an URI'
        return true;

    } else {
        alert('Not a valid URI');
        return false;

    }
}

export { checkForValidity }