// const EventEmitter = require("events");

// const myEmitter = new EventEmitter();

// someFunction = function () {
//   console.log("Something has happened!");
// };
// myEmitter.on("Some event", someFunction);

// myEmitter.emit("Some event");

// handleError = function (errorCode) {
//   // do something about the error
//   console.error("Woah, there was an error! \nError code:", errorCode);
// };

// myEmitter.on("error", handleError);

// myEmitter.emit("error", 9);

// const myEmitterForOnce = new EventEmitter();

// let n = 0;
// someFunction = function () {
//   n++;
//   console.log(`Value of n is: ${n}`);
// };

// myEmitterForOnce.once("event", someFunction);

// myEmitterForOnce.emit("event");
// myEmitterForOnce.emit("event");
// myEmitterForOnce.emit("event");
// // Listeners registered using the once method are only called once.

// ? Exercise
// There are three events that we need to take care of.

// The order event will be fired when we place an order for some food. It should output Order placed for food, where food will be the variable passed to the emitter.

// The doorbell event will be fired when our food is at the door. It should output RING RING!.

// The payment event will be fired once we pay for our food at the door. It should output Enjoy your food, where food will be the variable passed to the emitter.

// All the outputs should be done using console.log.
// The placeOrder function on line 5 describes the flow of how the events might be emitted. It is only there to help you. You do not have to uncomment it.

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

foodOrdered = function (foodType) {
  console.log(`Order placed for ${foodType}`);
};

doorbellPressed = function () {
  console.log("RING RING!");
};

foodPayed = function (foodType) {
  console.log(`Enjoy your ${foodType}`);
};

// Registering the event listener for "food_ordered" event
myEmitter.on("food_ordered", foodOrdered);
// Emitting the "food_ordered" event
myEmitter.emit("food_ordered", "Burger");

myEmitter.on("doorbell_pressed", doorbellPressed);
myEmitter.emit("doorbell_pressed");

myEmitter.on("food_payed", foodPayed);
myEmitter.emit("food_payed", "Burger");
