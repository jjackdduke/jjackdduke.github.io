info = ["테스트용 문구 0", "테스트용 문구 1", "테스트용 문구 2"];

document.querySelector(".left").addEventListener("click", function () {
  let idx = info.indexOf(
    document.querySelector(".carousel_content").textContent
  );
  if (idx == 0) {
    idx = info.length;
  }
  document.querySelector(".carousel_content").textContent = info[idx - 1];
});
document.querySelector(".right").addEventListener("click", function () {
  let idx = info.indexOf(
    document.querySelector(".carousel_content").textContent
  );
  if (idx == info.length - 1) {
    idx = -1;
  }
  document.querySelector(".carousel_content").textContent = info[idx + 1];
});
