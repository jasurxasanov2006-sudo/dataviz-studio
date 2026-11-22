// Sahifa yuklangandan keyin Bootstrap komponentlarini ishga tushirish
document.addEventListener("DOMContentLoaded", function () {
  // Tooltip elementlarini faollashtirish
  const tooltipList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipList.forEach(function (el) {
    new bootstrap.Tooltip(el);
  });

  // Popover elementlarini faollashtirish
  const popoverList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverList.forEach(function (el) {
    new bootstrap.Popover(el);
  });

  // Arizani yuborish formasi
  const arizaForma = document.getElementById("arizaForma");
  if (arizaForma) {
    arizaForma.addEventListener("submit", function (e) {
      e.preventDefault();
      const ism = document.getElementById("ismFamiliya").value;
      const yonalish = document.getElementById("yonalishTanlov").value;
      alert(ism + ", sizning \"" + yonalish + "\" yo‘nalishi bo‘yicha arizangiz qabul qilindi!");
      arizaForma.reset();
    });
  }
});