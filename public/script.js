// const radioBtns = document.getElementsByName('1');
// console.log(radioBtns.length);
// for (let i = 0; i < radioBtns.length; i++) {
//   radioBtns[i].disabled = true;
// }

const socket = io();
console.log(socket);
socket.emit('client', { name: 'Sanjay' });

let ques;
let opt;
function handleChange1(e) {
  console.log(e.id);
  const option = e.id.split('');
  ques = parseInt(option[0]);
  opt = parseInt(option[1]);

  socket.emit('answer', { ques: ques, opt: opt });
  console.log('ques= ', ques, ' opt=', opt);
}
function handleChange2(e) {
  console.log(e);
  const option = e.id.split('');
  ques = parseInt(option[0]);
  opt = parseInt(option[1]);
  socket.emit('answer', { ques: ques, opt: opt });
  console.log('ques= ', ques, ' opt=', opt);
}
function handleChange3(e) {
  console.log(e);
  const option = e.id.split('');
  ques = parseInt(option[0]);
  opt = parseInt(option[1]);
  socket.emit('answer', { ques: ques, opt: opt });
  console.log('ques= ', ques, ' opt=', opt);
}
function handleChange4(e) {
  console.log(e);
  const option = e.id.split('');
  ques = parseInt(option[0]);
  opt = parseInt(option[1]);
  socket.emit('answer', { ques: ques, opt: opt });
  console.log('ques= ', ques, ' opt=', opt);
}
