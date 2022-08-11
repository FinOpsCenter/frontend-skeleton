const dollarFormatter = (dollar) => {
  if (!dollar) return '--'
  if (dollar === '--') return dollar
  if (dollar.charAt(0) === '-') return dollar.replace('-', '-$')
  return `$${dollar}`
}

export default dollarFormatter
