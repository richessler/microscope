/*
* @Author: richwardell
* @Date:   2014-11-10 16:24:29
* @Last Modified by:   richwardell
* @Last Modified time: 2014-11-10 16:26:31
*/

/* To prevent autopublish, we establish
*  a serverside publish function
*/
Meteor.publish('posts', function(){
  return Posts.find();
});
