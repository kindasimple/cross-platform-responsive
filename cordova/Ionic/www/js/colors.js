var ShowColors = function(template, target) {
if(typeof template === 'undefined'){
  template = "#template";
}
if(typeof target === 'undefined'){
  target = "#target";
}
  var template = document.querySelector(template).innerHTML;
  Mustache.parse(template);   // optional, speeds up future uses
  //http://krazydad.com/tutorials/makecolors.php
  var redFrequency = .1;
      grnFrequency = .2;
      bluFrequency = .3;
      center = 128;
      width = 127;
  var colors = makeColorGradient(redFrequency,grnFrequency,bluFrequency,0,0,0,center,width,150);

  var rendered = Mustache.render(template, { colors: colors});
  document.querySelector(target).innerHTML = rendered;
};

function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
function RGB2Color(r,g,b)
  {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }
function makeColorGradient(frequency1, frequency2, frequency3,
                             phase1, phase2, phase3,
                             center, width, len)
  {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;

    var colors = [];
    for (var i = 0; i < len; ++i)
    {
       var red = Math.sin(frequency1*i + phase1) * width + center;
       var grn = Math.sin(frequency2*i + phase2) * width + center;
       var blu = Math.sin(frequency3*i + phase3) * width + center;
       colors.push({
          hex: RGB2Color(red,grn,blu),
          rgb: red + ',' + grn + ',' + blu
        });
    }
    return colors;
  }
