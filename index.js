'use strict';

function addDeps(a, b){
    if(a && a.cache && b){
        if(b.cache){
            a.cache.mergeDeps(b.cache);
        }
        a.cache.addDeps(b.realpath || b);
    }
}

module.exports = function(content, file, options) {
    var fileReg = options.reg;

    content = content.replace(fileReg, function(ret, src) {
        var path = file.getUrl(true, false).match(/(\/*\w+\/+)*/);

        if (path) {
            src = fis.project.getProjectPath() + '/' + path[0] + src;

            if (fis.util.isFile(src)) {
                var tpl = fis.file(src);
                fis.compile(tpl);

                addDeps(file, tpl);

                return tpl.getContent();
            }
        }

    });

    return content;
};

module.exports.options = {
	reg : /<!--#include\s(?:virtual|file)="([^"]+)"\s*-->/gim
}
