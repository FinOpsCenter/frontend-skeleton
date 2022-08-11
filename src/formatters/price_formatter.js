const priceFormatter = (price) => {
  if (typeof price === 'string' && price.indexOf(',') !== -1 && !isNaN(parseFloat(price))) {
    return price
  }

  if (price === '' || price === null || isNaN(price)) {
    return '--'
  }

  const formattedPrice = Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price)

  return formattedPrice
}

export default priceFormatter
