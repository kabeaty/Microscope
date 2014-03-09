Errors = new Meteor.Collection(null);

throw Error = function(message) {
  Errors.insert({message: message, seen: false})
}

clearErrors = function() {
  Errors.remove({seen: true});
}
