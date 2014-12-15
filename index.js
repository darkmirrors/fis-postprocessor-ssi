'use strict';

function addDeps(a, b){
    if(a && a.cache && b){
        if(b.cache){
            a.cache.mergeDeps(b.cache);
        }
        a.cache.addDeps(b.realpath || b);
    }
}

module.exports = function(content, file, conf) {
    var fileReg = conf.reg || /<!--#include\svirtual="([^"]+)"\s*-->/gim;

    content = content.replace(fileReg, function(ret, src) {
        var path = file.getUrl(true, false).match(/(\/*\w+\/+)*/);

        if (path) {
            src = fis.project.getProjectPath() + '/' + path[0] + src;

            if (fis.util.isFile(src)) {
                var tpl = fis.file.wrap(src);

                addDeps(file, tpl);

                return tpl.getContent();
            }
        }

    });

    return content;
};
