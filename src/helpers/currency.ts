const intlBRLFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
})

function formatToLocalCurrency(value: number): string {
  return intlBRLFormatter.format(value)
}

export { formatToLocalCurrency }
