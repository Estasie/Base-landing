document.addEventListener("DOMContentLoaded", () => {
  const openFormButton = document.querySelectorAll('.bookButton'),
        pricesFormButton = document.querySelectorAll('.book'),
        anchors = document.querySelectorAll('a[href*="#"]'),
        closeButton = document.querySelector('.closeButton'),
        callForm = document.querySelector('.formContainer');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);
      console.log(blockID);
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  openFormButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        callForm.classList.remove('hidden');
    });
  });

  pricesFormButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        callForm.classList.remove('hidden');
    });
  });

  closeButton.addEventListener('click', e => {
    callForm.classList.add('hidden');
  });
});
