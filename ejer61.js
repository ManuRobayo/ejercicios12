class Phone {
  constructor(number) {
    this.number = number;
    this.callQuantity = 0;
  }

  call() {
    this.callQuantity += 1;
  }
}
const phone = new Phone(3214710106);
// Expected callQuantity 0

phone.call();
// Expected callQuantity 1

phone.call();
phone.call();
// Expected callQuantity 3