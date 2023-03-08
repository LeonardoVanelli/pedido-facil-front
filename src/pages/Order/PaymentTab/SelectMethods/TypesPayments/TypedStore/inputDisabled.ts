const inputDisabled = {
  "": {
    expiration_date: true,
    value: true,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  $: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  X: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  A: {
    expiration_date: false,
    value: false,
    administrator_code: false,
    title_number: false,
    bank: true,
    approval: false,
    agency: true,
    instalments: false,
    current_account: true
  },
  E: {
    expiration_date: false,
    value: false,
    administrator_code: false,
    title_number: false,
    bank: true,
    approval: false,
    agency: true,
    instalments: false,
    current_account: true
  },
  C: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: false,
    bank: false,
    approval: true,
    agency: false,
    instalments: true,
    current_account: false
  },
  P: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: false,
    bank: false,
    approval: true,
    agency: false,
    instalments: true,
    current_account: false
  },
  H: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "*": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  G: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  D: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  J: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "!": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "@": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  Y: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  M: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "/": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "+": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  ".": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  Q: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  W: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  ">": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  V: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  F: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  "&": {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  },
  R: {
    expiration_date: false,
    value: false,
    administrator_code: true,
    title_number: true,
    bank: true,
    approval: true,
    agency: true,
    instalments: true,
    current_account: true
  }
}

const findEnabled = (type: string, inputId: string): boolean => {
  const typeList = inputDisabled[type as ""]
  if (!typeList) return true
  const typeInput = typeList[inputId as "administrator_code"]

  if (!typeInput) { return false }
  return true
}

export { findEnabled }
