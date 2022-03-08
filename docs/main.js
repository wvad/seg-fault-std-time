{
  const d = document.getElementById("date");
  const h = document.getElementById("h");
  const m = document.getElementById("m");
  const s = document.getElementById("s");
  const set = (element, value) => {
    value = value.toString();
    if (element.textContent === value) return;
    element.textContent = value;
  };
  setInterval(() => {
    const date = new Date();
    let ms =
      BigInt(date.getHours()) * 60n * 60n * 1000n +
      BigInt(date.getMinutes()) * 60n * 1000n +
      BigInt(date.getSeconds()) * 1000n +
      BigInt(date.getMilliseconds());
    const hours = (ms / 84375n).toString();
    ms %= 84375n;
    ms = Number(ms);
    const min = Math.floor(ms / 1318.359375).toString().padStart(2, '0');
    ms %= 1318.359375;
    const sec = Math.floor(ms / 20.599365234375).toString().padStart(2, '0');
    set(d, `${date.getFullYear()}/${date.getMonth().toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`);
    set(h, hours), set(m, min), set(s, sec);
  }, 3);
}
