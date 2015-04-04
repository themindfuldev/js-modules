var Zoo = (function() {
  var getBarkStyle = function(isHowler) {
    return isHowler? 'woooooow!': 'woof, woof!';
  };
  var Dog = function(name, breed) {
    this.bark = function() {
      return name + ': ' + getBarkStyle(breed === 'husky');
    };
  };
  var Wolf = function(name) {
    this.bark = function() {
      return name + ': ' + getBarkStyle(true);
    };
  };
  return {
    Dog: Dog,
    Wolf: Wolf
  };
})();
