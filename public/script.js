const radioBtns = document.getElementsByName('1');
console.log(radioBtns.length);
for (let i = 0; i < radioBtns.length; i++) {
  radioBtns[i].disabled = true;
}
