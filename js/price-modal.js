let form = {
  days: "1",
  price: 1000,
  discount: 15,
  referal: 0,
};
document.querySelectorAll(".dropdown-days").forEach(function (dropDownWrapper) {
  const customSelectDaysButton = document.querySelector(
    ".custom-select-days__button",
  );
  const customSelectDaysList = document.querySelector(
    ".custom-select-days-list",
  );
  const customSelectDaysItems = document.querySelectorAll(
    ".custom-select-days-list > .custom-select-days-list__item",
  );
  const customSelectPriceButton = document.querySelector(
    ".custom-select-price__button",
  );

  customSelectDaysButton.addEventListener("click", function () {
    customSelectDaysList.classList.toggle("custom-select-days-list--visible");
  });
  customSelectDaysItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      customSelectDaysButton.innerText = this.innerText;
      customSelectDaysButton.focus();
      customSelectPriceButton.innerText = this.dataset.value * 1000;
      customSelectDaysList.classList.remove("custom-select-days-list--visible");
      form.days = this.dataset.value;
      form.price = this.dataset.value * 1000;
      form.discount = this.dataset.value * 1000 * 0.15;
      form.referal = this.dataset.value * 1000 * 0.05;
    });
  });
});
