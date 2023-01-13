addEventListener("change", (e) => {
  const guestForm = document.getElementById("guestForm");
  if (e.target.id === "guestYes") {
    guestForm.classList.remove("animate__fadeOut", "animate__faster");
    guestForm.classList.add("animate__fadeIn");
    guestForm.removeAttribute("style");
  } else if (e.target.id === "guestNo") {
    guestForm.classList.remove("animate__fadeIn");
    guestForm.classList.add("animate__fadeOut", "animate__faster");

    setTimeout(() => {
      guestForm.setAttribute("style", "display:none;");
    }, 400);
  }
});
