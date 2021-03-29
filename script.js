const range = document.querySelector("#range");
const label = document.querySelector(".price");
const pageViews = document.querySelector(".page-views");
const btnToggle = document.querySelector(".btn-toggle");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  range.style.background = `linear-gradient(90deg, rgba(46, 216, 196, 1) ${value}%, rgba(236, 240, 251, 1) ${value}%)`;

  switch (value) {
    case 0:
      label.innerHTML = "$8.00";
      pageViews.innerHTML = "10K Pageviews";
      break;
    case 20:
      label.innerHTML = "$12.00";
      pageViews.innerHTML = "50K Pageviews";
      break;
    case 40:
      label.innerHTML = "$16.00";
      pageViews.innerHTML = "100K Pageviews";
      break;
    case 60:
      label.innerHTML = "$24.00";
      pageViews.innerHTML = "500K Pageviews";
      break;
    case 80:
      label.innerHTML = "$36.00";
      pageViews.innerHTML = "1M Pageviews";
      break;
  }
});

btnToggle.addEventListener("click", () => {
  btnToggle.classList.toggle("active");
});
