const myURL = new URL("http://yoursite:8000?id=100&status=active")

console.log(myURL.href)
console.log(myURL.toString())
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.search)
// console.log(myURL.searchParams)
myURL.searchParams.forEach((value, key) => {
  console.log(key, value)
})