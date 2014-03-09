Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);

    if (!user)
      throw new Meteor.Error(401, "Log in to comment");

    if (!commentAttributes.body)
      throw new Meteor.Error(422, "Write something");

    if (!post)
      throw new Meteor.Error(422, "You have to comment on a post");

    comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    return Comments.insert(comment);
  }
});
