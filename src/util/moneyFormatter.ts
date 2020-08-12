const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})


export const formatDecimalToDollars = (num: number) => {
  return formatter.format(num)
}
