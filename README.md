# fis-postporcessor-ssi 

## 说明

由于项目中有用到apache 自带的ssi功能，所以需要将`<!--#include virtual="path/to/file(.css|js|html)"-->`引入的内容内嵌进html中。

## 使用

先安装

> npm install -g fis-postprocessor-ssi

配置

	//可以自定义include的正则，如果不需要自定义的话，则忽略这些配置则可
	fis.config.merge({
        settings :{
            postprocessor : {
                'ssi' : {
                    reg : /<!--#include\svirtual="([^"]+)"\s*-->/gim
                }
            }
        }
    });
    
    //设置文件处理类型
	fis.config.merge({
    	modules :{
        	postprocessor : {
            	html : 'ssi',
            	css : 'ssi',
            	js : 'ssi'
        	}
    	}
	});
