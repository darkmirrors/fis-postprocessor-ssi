# fis-postporcessor-ssi 

## 说明

由于项目中有用到apache 自带的ssi功能，所以需要将`<!--#include virtual="block/reset.css"-->`引入的内容内嵌进html中。grunt 那边也有一个类似的ssi插件，顾自己写了一个。

## 使用

先安装

> npm install -g fis-postprocessor-ssi

配置

	//可以自己设置include的正则
	fis.config.merge({
        settings :{
            postprocessor : {
                'ssi' : {
                    reg : /<!--#include\svirtual="([^"]+)"\s*-->/gim
                }
            }
        }
    });
    
	//设置解析后内嵌的
	fis.config.merge({
    	modules :{
        	postprocessor : {
            	html : 'ssi',
            	css : 'ssi',
            	js : 'ssi'
        	}
    	}
	});
