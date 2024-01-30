const getConvertedTextContent = (textContent: string) =>
  textContent
    .toLowerCase()
    .replace(/[`!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/g, '')
    .replace(/\s/g, '-')

export default getConvertedTextContent
