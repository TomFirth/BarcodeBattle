// 5060087366319
interface BarcodeParts {
  countryCode: string;
  manufacturerCode: string;
  productCode: string;
  checkDigit: string;
}

function splitBarcode(barcode: string): BarcodeParts | null {
  if (barcode.length !== 13) {
    console.error("Invalid barcode length. Barcode must be 13 digits.");
    return null;
  }

  const countryCode = barcode.substring(0, 3);
  const manufacturerCode = barcode.substring(3, 7);
  const productCode = barcode.substring(7, 12);
  const checkDigit = barcode.substring(12);

  return {
    countryCode,
    manufacturerCode,
    productCode,
    checkDigit
  };
}

const barcode = "1234567890123";
const parts = splitBarcode(barcode);

if (parts) {
  console.log("Country Code:", parts.countryCode);
  console.log("Manufacturer Code:", parts.manufacturerCode);
  console.log("Product Code:", parts.productCode);
  console.log("Check Digit:", parts.checkDigit);
}

/*
  if no result
    add numbers from product code, higher number wins
    if draw
      compare check digit
*/