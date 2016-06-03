describe('CounterFactory', function(){

  beforeEach(module('counterApp'));

  var obj1;

  beforeEach(inject(function(CounterFactory){
    obj1 = new CounterFactory();
  }));
  
  it('true', function(){
    expect(true).toEqual(true);
  });

  it('initializes with 0', function(){
    expect(obj1.count).toEqual(0);
  });

  it('can increase the counter by 1', function(){
    obj1.increment(1);
    expect(obj1.count).toEqual(1);
  });

  it('can increment the counter by 5', function(){
    obj1.increment(5);
    expect(obj1.count).toEqual(5);
  });
});
