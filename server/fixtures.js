/*
* @Author: richwardell
* @Date:   2014-11-10 15:57:26
* @Last Modified by:   richwardell
* @Last Modified time: 2014-11-10 16:15:01
*/

if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducting Telescope',
    url: 'http://sachagreif.com/introducting-telescope'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
