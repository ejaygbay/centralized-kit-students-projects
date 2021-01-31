const toggleCardBody = (e) => {
  let ele_class = e.target.classList;
  let card_body = document.getElementById(ele_class[0]);

  if (!card_body.classList.contains("card-open")) {
    let card_open = document.querySelector(".card-open");
    let caret_up = document.querySelector(".up");
    caret_up.classList.replace("up", "down");
    card_open.classList.replace("card-open", "card-close");
    ele_class.replace("down", "up");
  }
  card_body.classList.replace("card-close", "card-open");
};
