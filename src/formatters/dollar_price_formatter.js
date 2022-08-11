import priceFormatter from './price_formatter'
import dollarFormatter from './dollar_formatter'

const dollarPriceFormatter = (price) => dollarFormatter(priceFormatter(price))

export default dollarPriceFormatter
