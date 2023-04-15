let h3 = document.getElementById("h3");
function btn() {
  let bahonalar = [
    "Propkada qolib kettim",
    "Telafonda gaplashyapgfan edim",
    "Uxlayotgan edim",
    "Majlisdaman",
    "O`rtoqlarimbilan edim",
    "Onam blan man",
  ];
  let a = Math.floor(Math.random() * bahonalar.length);
  h3.innerText = bahonalar[a];
}
