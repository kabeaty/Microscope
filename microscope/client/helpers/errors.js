Errors = new Meteor.Collection(null);
throw Error = function(message) {
  Errors.insert({message: message})
}
