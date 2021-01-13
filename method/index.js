module.exports = (gross, vat) => {
    if (!gross || !vat) {
        throw new Error('gross and vat parameters cannot be undefined')
    }

    if(typeof gross !== 'number' || typeof vat !== 'number') {
        throw new Error('gross and vat parameters cannot be undefined')
    }

    if (gross < 0) {
        throw new Error('gross parameter must be bigger than 0')
    }

    if (vat > 100 || vat < 0) {
        throw new Error('vat parameter must be from 0 to 100')
    }

    return gross - ((vat / 100) * gross);
};