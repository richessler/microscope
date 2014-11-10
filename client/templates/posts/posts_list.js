/*
* @Author: richwardell
* @Date:   2014-11-10 14:50:09
* @Last Modified by:   richwardell
* @Last Modified time: 2014-11-10 14:52:43
*/

var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsData
});
