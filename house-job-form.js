document.getElementById('cnic').addEventListener('input', function (e) {
    // This regex matches the CNIC format XXXXX-XXXXXXX-X
    let value = e.target.value;
    let formattedValue = value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (formattedValue.length > 5 && formattedValue.length <= 13) {
        formattedValue = formattedValue.substring(0, 5) + '-' + formattedValue.substring(5);
    }

    if (formattedValue.length > 13) {
        formattedValue = formattedValue.substring(0, 13) + '-' + formattedValue.substring(13, 14);
    }

    e.target.value = formattedValue;
});