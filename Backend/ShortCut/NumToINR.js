NumToINR = (number) => {
    if (number === null || number === undefined) return '';
    if (isNaN(number)) return '';

    const numString = number.toString();
    const [whole, fraction] = numString.split('.');

    let lastThreeDigits = whole.slice(-3);
    const otherDigits = whole.slice(0, -3);

    if (otherDigits !== '') {
        lastThreeDigits = ',' + lastThreeDigits;
    }

    const formattedNumber = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThreeDigits;

    return fraction ? formattedNumber + '.' + fraction : formattedNumber;
}

module.exports = NumToINR;