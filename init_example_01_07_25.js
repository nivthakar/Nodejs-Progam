const http = require('http');

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(res) {
        res.write(`<p>${this.name} makes a sound.</p>`);
    }
}

// Derived class (child)
class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor
    }

    // Override speak method
    speak(res) {
        res.write(`<p>${this.name} barks: Woof Woof!</p>`);
    }
}

// Create HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let myAnimal = new Animal("Generic Animal");
    myAnimal.speak(res); // Output from base class

    let myDog = new Dog("Tommy");
    myDog.speak(res); // Output from child class

    res.end("<h3>End of Inheritance Example</h3>");
}).listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});
