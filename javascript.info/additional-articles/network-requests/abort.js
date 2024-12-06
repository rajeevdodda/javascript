const controller = new AbortController();
let signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request was aborted");
});

setTimeout(() => controller.abort(), 3000);

try {
  fetch("https://javascript.info/article/fetch-abort/demo/hang", {
    signal: controller.signal,
  }).catch((err) => console.log(err));
} catch (err) {
  if (err.name == "AbortError") {
    // handle abort()
    console.log("Aborted!");
  } else {
    console.log(err);
    throw err;
  }
}
