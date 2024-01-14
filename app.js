window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll);
  if (scroll > 50) {
    ChangeCSS(".nav-bar", ".nav-bar-txt");
  } else if (scroll < 30) {
    ChangeCSS(".nav-bar-txt", ".nav-bar");
  }
});

function ChangeCSS(from, to) {
  let var1 = $(from);
  var1.removeClass(from.slice(1)).addClass(to.slice(1));
}

function upateDate() {
  const date = new Date();
  dateEmp = document.getElementById("dateEml");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateEmp.innerText = date.toLocaleDateString("en-us", options);
}


