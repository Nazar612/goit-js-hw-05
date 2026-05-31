// Завдання 5

// Напиши клас Car із зазначеними властивостями і методами.



class Car {
   getSpecs(car) {
   console.log(`MAXspeed: ${car.maxSpeed}, Speed: ${car.speed}, isOn?: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
 };

 constructor(maxSpeed = 0, price = 0, speed = 0 , isOn = false, distance = 0,) {
    this.maxSpeed = maxSpeed;
    this.price = price;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
 };


 set price(many) {
   this._price = many
 };
  get price() {
   return this._price
 };

 turnOn() {
   return this.isOn = true;
 };
 turnOff() {
   this.isOn = false;
   if(this.isOn === false) {
      this.speed = 0;
   }
   return this.isOn
 };

 /*
  * Додає до властивості speed отримане значення,
  * за умови, що результуюча швидкість
  * не більше, ніж значення властивості maxSpeed
  */
 accelerate(value) {
   let result = this.speed + value;
   if(result > this.maxSpeed) {
      result = 0;
   }
   this.speed = result
 }
 decelerate(value) {
   let result = this.speed -= value
   if(result < 0 || this.isOn === false) {
      result = 0;
   }
   this.speed = result
 }

 /*
  * Додає в поле distance кілометраж (hours * speed),
  * але тільки в тому випадку, якщо машина заведена!
  */
 drive(hours) {
   if(this.isOn) {
      this.distance = this.speed * hours;
   }
 }
}

const mustang = new Car( 200, 2000);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000