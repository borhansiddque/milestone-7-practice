function checkValue(value) {
  return value && typeof value !== "undefined"
    ? console.log("defined")
    : value === null
    ? console.log("null")
    : console.log("undefined");
}

checkValue(null)
checkValue(undefined)
checkValue(1)
checkValue(0)
checkValue("hello")
