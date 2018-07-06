/*
* @Author: Marte
* @Date:   2018-07-05 22:20:38
* @Last Modified by:   Marte
* @Last Modified time: 2018-07-06 16:14:12
*/

'use strict';
export default {
    /*获取本地数据并且解析为JSON对象*/
    fetch: function(name){
        return JSON.parse(localStorage.getItem(name) || '[]');
    },
    /*把数据以字符串的形式储存在本地*/
    save: function(name,item) {
        /*上一次存储的评论加上这次评论*/
        var items = this.fetch(name);
        console.log(typeof items);
        console.log("oldItems:" + items);
        items.unshift(item);

        localStorage.setItem(name,JSON.stringify(items));
    }
}