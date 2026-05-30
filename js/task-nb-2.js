// Завдання 2
// Напиши клас User для створення користувача з наступними властивостями:

// name — рядок
// age — число
// followers — число


// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
class User {
    constructor(name, age, followers ) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    };

    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}


const mango1 = new User('Mango', 2, 20,);
console.log(mango1);

mango1.getInfo(); // User Mango is 2 years old and has 20 followers

const poly1 = new User('Poly', 3, 17,);

poly1.getInfo(); // User Poly is 3 years old and has 17 followers
