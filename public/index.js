async function read() {
  var a= await fetch('test.txt').then(x => x.json());
  return a;
}

const a = {};

read().then((r) => a.b = r);
