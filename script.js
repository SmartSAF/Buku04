$(document).ready(function() {
  // Inisialisasi flipbook menggunakan turn.js
  $("#flipbook").turn({
    width: $(window).width(),
    height: $(window).height(),
    autoCenter: true,
    duration: 1000,
    gradients: true,
    acceleration: true,
    // Event ketika halaman sedang dibalik
    when: {
      turning: function(event, page, view) {
        // Mainkan efek suara flip
        var audio = document.getElementById('pageTurnSound');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          audio.play().catch(function(e) {
            console.log("Pemutaran audio gagal:", e);
          });
        }
      }
    }
  });

  // Sesuaikan ukuran flipbook saat jendela berubah ukuran
  $(window).resize(function() {
    $("#flipbook").turn("size", $(window).width(), $(window).height());
  });
});
