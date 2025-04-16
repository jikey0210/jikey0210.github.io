const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn"); // chỉ khai báo 1 lần

// ✨ Nút No chạy trốn ✨
noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * 100); // Giảm phạm vi di chuyển
  const randomY = Math.floor(Math.random() * 100); // Giảm phạm vi di chuyển

  // Giới hạn vị trí để đảm bảo nút không đi ra ngoài
  noBtn.style.left = `${randomX}%`;
  noBtn.style.top = `${randomY}%`;
});

// ✅ Nút Yes
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
