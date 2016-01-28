(function() {

  function ProtoTest() {
  }

  function SecondProto() {
    //acts as super
    ProtoTest.call(this);
    this.foobar = "Hello";
  }
  
  SecondProto.prototype = Object.create(ProtoTest.prototype);


  ProtoTest.prototype.firstFn = function() { 
     return "bar";
  };
  
  SecondProto.prototype.firstFn = function() {
    return "FOOBAR";
  };

  var firstInstance = new ProtoTest;
  var secondInstance = new ProtoTest;

  console.log(firstInstance.firstFn());
  console.log("=====");
  console.log(secondInstance.firstFn());

  console.log("\n\nnow changing second instance firstFn\n\n");

  secondInstance.firstFn = function() { 
    return "buzz";
  };

  console.log(firstInstance.firstFn());
  console.log("=====");
  console.log(secondInstance.firstFn());
  

  console.log("\n\nnow adding secondFn to prototype\n\n");

  ProtoTest.prototype.secondFn = function() {
    return "foo!";
  };

  console.log(firstInstance.secondFn());
  console.log("=====");
  console.log(secondInstance.secondFn());
  
  
  console.log("\n\nnow changing secondFn of prototype\n\n");
  ProtoTest.prototype.secondFn = function() {
    return "foobar!";
  };
  
  console.log(firstInstance.secondFn());
  console.log("=====");
  console.log(secondInstance.secondFn());

  console.log("\n\nnow adding thirdFn of prototype\n\n");
  ProtoTest.prototype.thirdFn = function() {
    return this.foobar;
  };
  
  console.log(firstInstance.thirdFn());
  console.log("=====");
  console.log(secondInstance.thirdFn());
  
  console.log("\n\nnow testing second proto\n\n");

  var thirdInstance = new SecondProto;
  console.log(thirdInstance.firstFn());
  console.log(thirdInstance.secondFn());
  console.log(thirdInstance.thirdFn());

  return "Test done";
})();
