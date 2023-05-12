let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar-desk");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

//Email JS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_4kg62p9", "template_j1ar2pa", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire("Oh No...!", "Fields cannot be empty!", "error");
}

function success() {
  Swal.fire(
    "Email sent successfully",
    "We try to reply in 24 hours",
    "success"
  );
}

// Header Background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

// Qr
let btnQr = document.querySelector(".qr-insta");
let qrContent = document.querySelector(".social-qr");

btnQr.onclick = () => {
  qrContent.classList.toggle("social-qr-active");
};
