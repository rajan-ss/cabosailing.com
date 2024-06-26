(function ($) {
  $(document).ready(function () {
    function initBgCover(context) {
      if (!context) context = $('body')
      context.find('.bg-cover').each(function () {
        var holder = $(this)
        var image = holder.find('> img').hide()
        var imageSrc = image.prop('src')
        holder.css({
          backgroundImage: 'url(' + imageSrc + ')',
        })
      })
    }

    initBgCover()

    /* smooth scroll*/
    var winWidth = $(window).width()
    $(' a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          if (winWidth > 991) {
            $('html, body').animate(
              {
                scrollTop: target.offset().top - 100,
              },
              1000
            )
          } else {
            $('html, body').animate(
              {
                scrollTop: target.offset().top,
              },
              1000
            )
          }
          return false
        }
      }
    })

    function stickyFooter() {
      let stickyFooter = $('.sticky-footer')
      let stickyFooterHeight = stickyFooter.innerHeight()
      let siteFooter = $('.site-footer')
      siteFooter.css('margin-bottom', stickyFooterHeight)
    }
    stickyFooter()

    let debounceTimeout
    $(window).on('resize', function () {
      clearTimeout(debounceTimeout)
      debounceTimeout = setTimeout(function () {
        stickyFooter()
      }, 250)
    })
  })
})(jQuery)
