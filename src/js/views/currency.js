class CurrencyUi {
    constructor() {
        this.currency = document.getElementById('currency');
        this.dictionary = {
            USD: '$',
            EUR: '€',
            RUB: '₽'
        }
    }

    get currencyValue() {
        return this.currency.value;
    }

    getcurrencySymbol() {
        return this.dictionary[this.currencyValue];
    }
}

const currencyUI = new CurrencyUi();

export default currencyUI;
