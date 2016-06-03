counterApp.factory('CounterFactory', function() {

  var Counter = function(){
    this.currentTime = Date();
    this.count = 0;
  };

  Counter.prototype.increment = function(number) {
    this.count+= number;
  };

  Counter.prototype.decrement = function(number) {
    this.count-= number;
  };

return Counter;

});
