
// TODO: Open video youtube
let
		IMG = document.querySelectorAll('.video img'),
    IFRAME = document.querySelector('.open_video iframe');

for (let i = 0; i < IMG.length; i++) {
  IMG[i].onclick = function() {
    let idIMG = this.src.replace(/http...img.youtube.com.vi.([\s\S]*?).mqdefault.jpg/g, '$1');
    IFRAME.src = 'http://www.youtube.com/embed/' + idIMG + '?rel=0&autoplay=1';
    if(this.dataset.end) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&end=' + this.dataset.end);
    if(this.dataset.start) IFRAME.src = IFRAME.src.replace(/([\s\S]*)/g, '$1&start=' + this.dataset.start);
    this.style.backgroundColor='#555';
  }
}