const products = [
  // Python 
  { image: "https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg", title: "Python Programming for the Total Beginner", description: "A Hands-On Python Masterclass, With Real Life Examples, Coding Exercises, Quizzes, and Reference Code.", onSale: true, category: "Python" },
  { image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/08/python-libraries-2.jpg", title: "Python Functions in depth", description: "Know about Functions, Lambda Functions, Decorators, Generators, Recursive functions and many more.", onSale: true, category: "Python" },
  { image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210215160315/FREE-Python-Course-For-Beginners.png", title: "Python Mega Course", description: "High-end Learn Python from zero to advanced by building real programs to gain the skills needed to land an entry-level job.", onSale: true, category: "Python" },
  { image: "https://miro.medium.com/v2/resize:fit:1080/1*xRcXl9YKgpnb0zvXLvZprg.jpeg", title: "Python Data Science: Data Prep & EDA with Python", description: "Learn Python + Pandas for data cleaning, profiling & EDA, and prep data for machine learning & data science with Python.", onSale: true, category: "Python" },
  { image: "https://files.realpython.com/media/Get-Started-With-Django_Watermarked.15a1e05597bc.jpg", title: "Python and Django Full Stack Web Developer Bootcamp", description: "Learn how to build web applications and websites with Python and the Django framework.", onSale: true, category: "Python" },


  // Java 
  { image: "https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp", title: "60 Days of Java : The Complete Java Masterclass", description: "Master Java by building real-world projects. Learn JavaFX, Spring Boot, REST APIs, and more!", onSale: true, category: "Java" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BJV0pFI2rNz30QH1N9lqEvjlFD9_9bR4NQ&s", title: "Make 10 Advanced Level Applications in Java Swing GUI", description: "Learn Java Swing GUI by creating 10 Amazing Games and Application", onSale: true, category: "Java" },
  { image: "https://img-c.udemycdn.com/course/750x422/2167814_a0e6_5.jpg", title: "Java Spring Framework 6, Spring Boot 3, Spring AI Telusko", description: "Master Java, Spring 6 and Spring Boot 3 , Spring JPA, Security, Spring AI, Docker and Microservices with Telusko", onSale: true, category: "Java" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8E7Y1k3ZxW5PnC7xg8pwKW5doyM-BZsd-w&s", title: "Become a Java Full Stack Developer with React & Spring Boot", description: "Master Java Full Stack: React, Spring Boot, REST APIs, JPA, Security, JWT, Redux, Stripe, Tailwind CSS & More", onSale: true, category: "Java" },

  // SQL 
  { image: "https://www.computeracademy.com.hk/images/course_slider/sql_banner.jpg", title: "PostgreSQL Bootcamp : Go From Beginner to Advanced, 60+hours", description: "Learn about Subqueries, CTEs, Indexes, PL/SQL, PL/pgSQL, Triggers, Cursors, Partitions, Views, JSON, Window Functions...", onSale: false, category: "SQL" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdlZRwaMymcbXbAJbzG6wSjpH54cTFrwhQzPm08ZpeOWvfK30rKWJ_6Snu6cVOqqVPP4&usqp=CAU", title: "SQL - MySQL for Data Analytics and Business Intelligence", description: "SQL that will get you hired – SQL for Data Science, Data Engineering, Business Analysis, Marketing, and Data Management.", onSale: false, category: "SQL" },
  { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvR1dkwQ1MJXvBJcDduZJ8BX6cvwo2KAyl9w&s", title: "Complete Microsoft SQL Server Database Administration Course", description: "Mastering Database Management and Security with Microsoft SQL Server", onSale: false, category: "SQL" },

  // Go (2)
  { image: "https://i.ytimg.com/vi/yyUHQIec83I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7X70qzTDAPqQW2-k6YGTHYkQSUQ", title: "Go - The Complete Guide", description: "Learn Go (Golang) from the ground up & in great depth by building multiple demo projects, incl. a REST API.", onSale: false, category: "Go" },
  { image: "https://www.classcentral.com/report/wp-content/uploads/2022/09/Go-BCG-Banner_fixed.png", title: "Working with Microservices in Go (Golang)", description: "Build highly available, scalable, resilient distributed applications using Go.", onSale: true, category: "Go" }
];

function createCard(product) {
  return `
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
      <img class="rounded-t-lg w-full h-48 object-cover" src="${product.image}" alt="${product.title}" />
      <div class="absolute top-0 right-0 ${product.onSale ? 'bg-red-500' : 'bg-gray-500'} text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
        ${product.onSale ? 'Buy' : 'Free'}
      </div>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.description}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Buy Now
        </a>
      </div>
    </div>
  `;
}

// Render cards to the DOM
function renderCards(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = productList.map(createCard).join("");
}

function filterByCategory(category) {
  if (category === "All") {
    renderCards(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderCards(filtered);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(products); // show all on load

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      filterByCategory(category);
    });
  });
});
