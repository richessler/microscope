/*
* @Author: richwardell
* @Date:   2014-11-10 15:02:01
* @Last Modified by:   richwardell
* @Last Modified time: 2014-11-10 15:06:19
*/

Template.postItem.helpers({
  domain: function(){
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
