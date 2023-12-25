/**1-2-3**/
/*
let dog = {};

console.log(dog);

dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;

dog.bark = function() {
  return 'woof woof';
};

console.log(dog);

console.log(dog.name + ' says: ' + dog.bark());
*/
//==============================================
/**4**/
/*
var dog = {
    name: "Lord",
    legs: 4,
    color: "Black",
    age: 3,
    bark: function() {
        return 'woof woof';
    }
};
var dogName = dog.name;
var dogLegs = dog.legs;
var dogColor = dog.color;
var dogAge = dog.age;
var dogBark = dog.bark();

console.log('Name:', dogName);
console.log('Legs:', dogLegs);
console.log('Color:', dogColor);
console.log('Age:', dogAge);
console.log('Bark:', dogBark);
*/
//==============================================
/**5**/
/*
let dog = {
    name: "Lord",
    legs: 4,
    color: "Black",
    age: 3,

};

dog.bark = function() {
    return "woof woof";
}
console.log(dog.bark());


dog.breed = "Labrador";

dog.getDogInfo = function() {
    return this.name + ' is a ' + this.color + ' ' + this.breed + ' with ' + this.legs + ' legs and is ' + this.age + ' years old.';
};

console.log(dog);
console.log(dog.getDogInfo());
*/
//==============================================
/**6**/
/*
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let mostSkilledPerson = null;
  let maxSkills = 0;

  for (const person in users) {

    const skillsCount = users[person].skills.length;
if (skillsCount > maxSkills) {

    maxSkills = skillsCount;
    mostSkilledPerson = person;
}
  }
  console.log(`${mostSkilledPerson} has the most, ${maxSkills} skills.`);\
*/
//==============================================
/**7**/
/*
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let logedInUsersCount = 0;
  let highPointsUsersCount = 0;

for (const person in users) {
    if (users[person].isLoggedIn) {
        logedInUsersCount++;
    }
if (users[person].points >= 50) {
    highPointsUsersCount++;
}
}
console.log(`logged-in users: ${logedInUsersCount}`);
console.log(`users with 50 or more points: ${highPointsUsersCount}`);
*/
//==============================================
/**8**/
/*
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const allKeys = Object.keys(users);
  console.log(allKeys);
  */
 //==============================================

/**9**/
/*
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  const allValues = Object.values(users);

  console.log(allValues);
  */
 //==============================================

/**10**/
/*
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
const signUp = (username, password, email) => {
    const existingUser = users.find(user => user.email === email);
if (existingUser) {

    console.log("User already has an account. Please sign in.");
        return;
    }
const newUser = {
    
        username,
        email,
        password,
        isLoggedIn: false
};
users.push(newUser);
console.log("User signed up successfully.");

}

const signIn = (email, password) => {
    const user = users.find(user => user.email === email);
  
    if (user && user.password === password) {

        user.isLoggedIn = true;
        console.log("User signed in successfully.");
    } else {
        console.log("Invalid email or password. Please try again.");
    }
};

signUp('George', 'George@example.com', 'password123');
signIn('john@example.com', 'password123');
signIn('thomas@thomas.com', '123333')
*/
//==============================================

/**11-A**/
/*
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
]
const rateProduct = (productId, userId, rating) => {

const product = products.find(product => product._id === productId);

if (product) {

    const existingRating = product.ratings.find(r => r.userId === userId);

if (existingRating) {
    console.log("You have already rated this product.");
} else {
    product.ratings.push({ userId, rate: rating });
    console.log("Product rated successfully.");
}

} else {
    console.log("Product not found.");
}
};
rateProduct('aegfal', 'thomas123', 4.5);
rateProduct('aegfal', 'john456', 3.0);
*/
//==============================================

/**11-B**/
/*
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
]

const averageRating = (productId) => {
    const product = products.find(product => product._id === productId);
    if (product && product.ratings.length > 0) {
     
        const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
        const average = totalRating / product.ratings.length;
        return average.toFixed(2);
    } else {
        return "Product not found or has no ratings.";
    }
};

const productId = 'hedfcg';
const avgRating = averageRating(productId);

console.log(`Average rating for product with ID ${productId}: ${avgRating}`);
*/
//==============================================

/**12**/
/*
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
]

const likeProduct = (userId, productId) => {
    const product = products.find(product => product._id === productId) 
    if (product) {

        const indexOfUserLike = product.likes.indexOf(userId);
        if (indexOfUserLike === -1) {
            product.likes.push(userId);
            console.log("Product liked successfully.");
        
        } else {
            product.likes.splice(indexOfUserLike, 1);
            console.log("Product like removed successfully.");
        }
        } else {
            console.log("Product not found.");
        }
};
const productId = 'hedfcg';
const userId = 'thomas123';

likeProduct(productId, userId);
*/

//==============================================