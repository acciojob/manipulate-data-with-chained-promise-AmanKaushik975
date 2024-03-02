//your JS code here. If required.
function processData(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then((arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = arr.filter(num => num % 2 === 0);
        document.getElementById("output").innerText = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map(num => num * 2);
        document.getElementById("output").innerText = doubledNumbers.join(", ");
        resolve(doubledNumbers);
      }, 2000);
    });
  });
}

// Usage
const input = [1, 2, 3, 4];
processData(input);
