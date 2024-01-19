function convertCurrency() {
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        alert("Please enter a valid number for the amount.");
        return;
    }
    var conversionRate;

    switch (fromCurrency) {
        case 'INR':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.012;
                    break;
                case 'CNY':
                    conversionRate = 0.087;
                    break;
                case 'EUR':
                    conversionRate = 0.011;
                    break;
                case 'JPY':
                    conversionRate = 1.78;
                    break;
                case 'GBP':
                    conversionRate = 0.0095;
                    break;
                case 'AED':
                    conversionRate = 0.044;
                    break;
                case 'AUD':
                    conversionRate = 0.018;
                    break;
                case 'CAD':
                    conversionRate = 0.016;
                    break;
                case 'PKR':
                    conversionRate = 3.32;
                    break;
                case 'INR':
                    conversionRate = 1.00;
                    break;
            }
            break;
        case 'USD':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 1;
                    break;
                case 'CNY':
                    conversionRate = 7.13;
                    break;
                case 'EUR':
                    conversionRate = 0.92;
                    break;
                case 'JPY':
                    conversionRate = 148.07;
                    break;
                case 'GBP':
                    conversionRate = 0.79;
                    break;
                case 'AED':
                    conversionRate = 3.67;
                    break;
                case 'AUD':
                    conversionRate = 1.52;
                    break;
                case 'CAD':
                    conversionRate = 1.35;
                    break;
                case 'PKR':
                    conversionRate = 276.25;
                    break;
                case 'INR':
                    conversionRate = 83.16;
                    break;
            }
            break;
        case 'CNY':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.14;
                    break;
                case 'CNY':
                    conversionRate = 1;
                    break;
                case 'EUR':
                    conversionRate = 0.13;
                    break;
                case 'JPY':
                    conversionRate = 20.77;
                    break;
                case 'GBP':
                    conversionRate = 0.11;
                    break;
                case 'AED':
                    conversionRate = 0.52;
                    break;
                case 'AUD':
                    conversionRate = 0.22;
                    break;
                case 'CAD':
                    conversionRate = 0.19;
                    break;
                case 'PKR':
                    conversionRate = 39.27;
                    break;
                case 'INR':
                    conversionRate = 11.80;
                    break;
            }
            break;
        case 'EUR':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 1.09;
                    break;
                case 'CNY':
                    conversionRate = 7.74;
                    break;
                case 'EUR':
                    conversionRate = 1;
                    break;
                case 'JPY':
                    conversionRate = 160.82;
                    break;
                case 'GBP':
                    conversionRate = 0.86;
                    break;
                case 'AED':
                    conversionRate = 3.99;
                    break;
                case 'AUD':
                    conversionRate = 1.65;
                    break;
                case 'CAD':
                    conversionRate = 1.47;
                    break;
                case 'PKR':
                    conversionRate = 303.98;
                    break;
                case 'INR':
                    conversionRate = 90.33;
                    break;
            }
            break;
        case 'JPY':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.0068;
                    break;
                case 'CNY':
                    conversionRate = 0.048;
                    break;
                case 'EUR':
                    conversionRate = 0.0062;
                    break;
                case 'JPY':
                    conversionRate = 1;
                    break;
                case 'GBP':
                    conversionRate = 0.0053;
                    break;
                case 'AED':
                    conversionRate = 0.025;
                    break;
                case 'AUD':
                    conversionRate = 0.010;
                    break;
                case 'CAD':
                    conversionRate = 0.0091;
                    break;
                case 'PKR':
                    conversionRate = 1.89;
                    break;
                case 'INR':
                    conversionRate = 0.56;
                    break;
            }
            break;
        case 'GBP':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 1.27;
                    break;
                case 'CNY':
                    conversionRate = 9.02;
                    break;
                case 'EUR':
                    conversionRate = 1.17;
                    break;
                case 'JPY':
                    conversionRate = 187.79;
                    break;
                case 'GBP':
                    conversionRate = 1;
                    break;
                case 'AED':
                    conversionRate = 4.66;
                    break;
                case 'AUD':
                    conversionRate = 1.93;
                    break;
                case 'CAD':
                    conversionRate = 1.71;
                    break;
                case 'PKR':
                    conversionRate = 354.83;
                    break;
                case 'INR':
                    conversionRate = 105.47;
                    break;
            }
            break;
        case 'AED':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.27;
                    break;
                case 'CNY':
                    conversionRate = 1.92;
                    break;
                case 'EUR':
                    conversionRate = 0.25;
                    break;
                case 'JPY':
                    conversionRate = 40.34;
                    break;
                case 'GBP':
                    conversionRate = 0.21;
                    break;
                case 'AED':
                    conversionRate = 1;
                    break;
                case 'AUD':
                    conversionRate = 0.42;
                    break;
                case 'CAD':
                    conversionRate = 0.37;
                    break;
                case 'PKR':
                    conversionRate = 76.19;
                    break;
                case 'INR':
                    conversionRate = 22.65;
                    break;
            }
            break;
        case 'AUD':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.66;
                    break;
                case 'CNY':
                    conversionRate = 4.67;
                    break;
                case 'EUR':
                    conversionRate = 0.60;
                    break;
                case 'JPY':
                    conversionRate = 97.18;
                    break;
                case 'GBP':
                    conversionRate = 0.52;
                    break;
                case 'AED':
                    conversionRate = 2.41;
                    break;
                case 'AUD':
                    conversionRate = 1;
                    break;
                case 'CAD':
                    conversionRate = 0.89;
                    break;
                case 'PKR':
                    conversionRate = 183.42;
                    break;
                case 'INR':
                    conversionRate = 54.54;
                    break;
            }
            break;
        case 'CAD':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.74;
                    break;
                case 'CNY':
                    conversionRate = 5.28;
                    break;
                case 'EUR':
                    conversionRate = 0.68;
                    break;
                case 'JPY':
                    conversionRate = 109.72;
                    break;
                case 'GBP':
                    conversionRate = 0.58;
                    break;
                case 'AED':
                    conversionRate = 2.72;
                    break;
                case 'AUD':
                    conversionRate = 1.13;
                    break;
                case 'CAD':
                    conversionRate = 1;
                    break;
                case 'PKR':
                    conversionRate = 207.14;
                    break;
                case 'INR':
                    conversionRate = 61.57;
                    break;
            }
            break;
        case 'PKR':
            switch (toCurrency) {
                case 'USD':
                    conversionRate = 0.0036;
                    break;
                case 'CNY':
                    conversionRate = 0.025;
                    break;
                case 'EUR':
                    conversionRate = 0.0033;
                    break;
                case 'JPY':
                    conversionRate = 0.53;
                    break;
                case 'GBP':
                    conversionRate = 0.0028;
                    break;
                case 'AED':
                    conversionRate = 0.013;
                    break;
                case 'AUD':
                    conversionRate = 0.0055;
                    break;
                case 'CAD':
                    conversionRate = 0.0048;
                    break;
                case 'PKR':
                    conversionRate = 1;
                    break;
                case 'INR':
                    conversionRate = 0.30;
                    break;
            }
            break;
        
        default:
            alert("Invalid currency selection.");
            return;
    }

    var convertedAmount = amount * conversionRate;
    document.getElementById('result').innerText = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
}
