function event_track(selector, debug) {
  $("body").on('click', ".gt", function () {
      var ec = $(this).data('ec');
      ec = ec ? ec : "金鐘57";

      var ea = "";
      if ($(this).data('ea')) {
          ea = $(this).data('ea');
      }

      var el = '';
      if ($(this).data('el')) {
          el = $(this).data('el');
      }
      else {
          if ($(this).has("img").length > 0) {
              if ($(this).find('img').first().attr('alt')) {
                  el = $(this).find('img').first().attr('alt');
              }
              else {
                  el = $(this).find('img').first().attr('src');
              }
          }
          else {
              el = $(this).text();
          }
      }
      console.log('>>>>>')
      console.log(ec);
      console.log(ea);
      console.log(el);
      // ga
    //   ga('send', 'event', ec, ea, el);
      // matomo event 
      _paq.push(['trackEvent', ec, ea, el]);
  });
}
function link_change() {
    let linkChangeTime = setTimeout("link_change()", 5000);

    let openTime = new Date("2022/9/7 10:57")
    if(new Date() >= openTime){
        console.log(">>>")
        // $('.change-link')
        clearTimeout(linkChangeTime);
    }
}