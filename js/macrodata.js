// Gallery lightbox — uses native <dialog> element
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    var lbImg     = lightbox.querySelector('img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var lbClose   = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item img').forEach(function (img) {
      img.addEventListener('click', function () {
        lbImg.src           = this.src;
        lbImg.alt           = this.alt;
        lbCaption.textContent = this.alt || '';
        lightbox.showModal();
      });
    });

    if (lbClose) {
      lbClose.addEventListener('click', function () { lightbox.close(); });
    }

    // Click outside the image closes the dialog
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) lightbox.close();
    });
  });
}());

// Animated counters on scroll (IntersectionObserver)
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var counters = document.querySelectorAll('.stat-number[data-count]');
    if (!counters.length || !window.IntersectionObserver) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        var el       = entry.target;
        var target   = parseInt(el.getAttribute('data-count'), 10);
        var suffix   = el.getAttribute('data-suffix') || '';
        var steps    = 48;
        var interval = 1100 / steps;
        var current  = 0;
        var increment = target / steps;

        var timer = setInterval(function () {
          current = Math.min(current + increment, target);
          el.textContent = Math.round(current) + suffix;
          if (current >= target) clearInterval(timer);
        }, interval);

        observer.unobserve(el);
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { observer.observe(el); });
  });
}());
