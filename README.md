
# Best Learning Website 

    Our online learning website is designed to provide 
    users with access to a wide range of educational content,
    including courses, lectures, and videos. Our platform 
    is designed to be user-friendly and easy to navigate, with
    a variety of interactive features that help students stay 
    engaged and motivated.

    Our courses cover a wide range of subjects. We have administrators 
    who run the website and are in control of everything. Our highly 
    qualified instructors bring a wealth of knowledge and experience 
    to our courses and provide students with exceptional material.
    We have two types of users who can access the courses; an 
    individual trainee that signs up to fully use the website and a 
    coorporate trainee that has acces to less features. Our platform 
    also includes tools for tracking progress, taking quizzes and 
    exams, and receiving an authentic certificate after course 
    completion.

    Whether you're a student looking to enhance your skills
    or a professional seeking to learn something new, our 
    online learning website has something for everyone. 
    We hope you enjoy your learning experience on our platform!
## Motivation

    The motivation behind creating this MERN stack online learning
    website for the ACL (Advanced Computer Lab) course was to provide
    a comprehensive educational resource for learners around the world,
    similar to platforms like Coursera and Udemy. With this platform,
    we aim to make it easier for learners to access high-quality course 
    materials, lectures, and other learning resources in one central location,
    and to provide a convenient and flexible way for learners to learn the material 
    at their own pace. 
    
    One of the main benefits of this project is that it allows 
    learners to review and reinforce their understanding of the course material whenever 
    they need to. Whether they are looking to catch up on missed lectures or to review 
    material for an upcoming exam, this platform provides a valuable resource for them to do so.
    
    In addition to being a valuable resource for learners, this project also has the potential 
    to benefit educators by providing an online platform for course materials, lectures, and 
    other resources. By streamlining the process of teaching and learning, this platform makes 
    it easier for educators to create and deliver engaging content to their students.
    
    Overall, our goal with this project is to create a comprehensive online learning resource
    that serves the needs of learners around the world, similar to the successful platforms in 
    the industry. We hope that this platform will be a valuable asset to the education community 
    and contribute to the success of learners everywhere.
## Build Status

    The current build status is: in development.

    We are currently working on improving the frontend of the project
    and ensuring that it meets high standards for UX/UI design. 
    However, please note that there are known issues with certain routes
    causing crashes in the backend server. We are working to fix these 
    issues as soon as possible.

    Please use caution when navigating the site and report any issues you
    encounter to our team. Thank you for your patience as we continue to 
    develop and improve the project.
## Code Style


    We follow a set of coding conventions and guidelines to ensure
    that our code is clean, consistent, and easy to understand. 
    However, please note that this project was developed by a team 
    of 5 people, which may result in some inconsistencies in the 
    code style. We apologize for any confusion this may cause, and
    we welcome any contributions that can help to improve the consistency
    of the code.

    Here are some additional key points to keep in mind when working with
    the code:

    - Use consistent indentation (we recommend using 2 spaces).
    - Use descriptive names for variables, functions, and filenames.
    - Declare variables at the top of their scope, using 'const' or 'let'
      or 'var' as appropriate.
    - Use single quotes for strings, unless you are using string 
      interpolation or escaping characters.
    - Use strict equality (===) operators.
    - Add comments to explain non-obvious code.
    - Use whitespace to improve readability and to separate logical 
      sections of code.
    - Declare functions before calling them.
    - Avoid abbreviations unless they are widely understood.
    - In React components, use fetch or Axios (as appropriate) to make API calls.
    - When importing functions from the router in Node.js, import them all in a 
      single object using a big bracket, rather than importing them one by one. 
      For example:
      const express = require('express')
      const {
            createcourse,
            getCourses,
            searchSubjectOrTitle,
            getcoursebyprice,
            getcoursebysubjectRating,
            getCoursebyid,
            getSubtitlebyid,
            curr,
            mostPopular
      } = require('../controllers/courseController') 
      This allows you to easily import and use multiple functions from the router 
      in a single line, rather than having to import them individually.

## Tech/Framework

This project is built using the MERN stack, which stands for 
MongoDB, Express, React, and Node.js. Here are some specific 
technologies and frameworks that are used in this project:

    - MongoDB: A NoSQL database that is used to store data for the application.
    
    - Express: A web framework for Node.js that is used to build the API for the 
      application.
    
    - React: A JavaScript library for building user interfaces that is used for 
      the front-end of the application.
    
    - Node.js: A JavaScript runtime that is used to execute server-side code for 
      the application.
    
    - JavaScript: This project is written in JavaScript, a high-level, interpreted 
      programming language.
    
    - npm: This project uses the npm package manager to manage dependencies and 
      to run scripts.
    
    - Git: This project uses Git for version control.
    
Please note that this project has specific versions and dependencies that are 
listed in the package.json file. Make sure to install the necessary dependencies 
before running the application. Additionally, this project requires a recent 
version of Node.js and npm to be installed on your system.
## Installation instructions

1. Prerequisites:

       Make sure you have the following software installed on your
       machine:

       -Node.js and npm (the package manager for Node.js)
       -MongoDB
       -Git

2. Download the project files and clone the project repository 
from Github using the following command: 


       git clone https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema.git

3. Alternatively, you can download the project as a ZIP file and extract 
it to your desired location.

4. Install the required dependencies:Navigate to the project directory 
   and install the required npm packages using the following command in both
   terminals; frontend and backend:

       npm install 

5. Set up the database:

       Create a new database in MongoDB and update the MONGODB_URI in the 
       .env file with the connection string for your database.

6. Start the development server:

        Run the following command to start the development server: npm run dev
        The server should now be running at http://localhost:3000.

7. Test the website:

        Open your web browser and navigate to http://localhost:3000 to verify
        that the website is working correctly.


# How to use? 

This online learning website is designed to provide a variety of 
learning opportunities for a wide range of users. 

- Sign Up: 

      To sign up for an account on the website, click the "Sign Up"
      button in the top right corner of the home page. You will be
      prompted to enter your personal information and create a 
      username and password. Before completing the sign up process, 
      you will need to accept all terms and conditions. Only individual
      trainees can sign up. 

- Log In: 

      Log In: To log in to the website, click the "Log In" button in 
      the top right corner of the home page. You will be prompted to 
      enter your username and password. Once you have logged in, you 
      will be redirected to your corresponding home page.

Depending on your 
role, you may have different privileges and abilities within the 
website. Here is a brief overview of the different types of users 
and how they can use the website:

    A. Guests: Guests are users who are not logged in to the website. 
    They can browse the course catalog and view the details of 
    individual courses, but they cannot enroll in courses or access 
    other features. To access additional features, guests must 
    create an account.

    B. Instructors: Instructors are users who have been approved to 
    teach courses on the website. They can create and publish 
    courses, create and grade assignments, and view their course 
    analytics and earnings.

    C. Individual trainees: Individual trainees are users who have 
    created an account and are enrolled in one or more courses. 
    They can access course content, complete assignments, and view 
    their progress through courses. Upon course completion, 
    individual trainees will receive a certificate via email. 
    They can register for courses by paying through credit card or 
    their wallet balance. They can also request a refund for a 
    course if they have attended less than 50% of the course.

    D. Corporate trainees: Corporate trainees are users who are 
    sponsored by a company to take courses on the website. 
    They have access to the same course content as individual 
    trainees, but they may not have access to all courses or 
    features. To request access to a specific course, corporate
    trainees must submit a request to the administrator.

    E. Administrators: Administrators are users who have special 
    privileges to manage the website. They can apply discounts to 
    courses, accept corporate trainee requests, issue refunds for 
    individual trainees, and resolve problems. They can also access 
    website analytics and perform other administrative tasks.


## Features and Functionalities 

    This online learning website offers a range of features to help 
    users learn and grow. Some of the key features include:

    1. Course catalog: Browse a wide variety of courses in different 
       subjects, taught by experienced instructors.
    
    2. Video lectures: Watch high-quality video lectures on any device, 
       at your own pace.
    
    3. Quizzes and assignments: Test your knowledge with quizzes and 
       complete assignments to deepen your understanding of the material.
    
    4. Payment integration: Easily purchase courses using a secure payment 
       system, or pay using your wallet balance.
    
    5. Progress tracking: Keep track of your progress through courses and 
       see what you have completed.
    
    6. Certificate upon course completion: Upon completing a course, you 
       will receive a certificate to show off your achievements.
    
    7. Report problems: If you encounter any issues or problems while using 
       the website, you can easily report them to the team for assistance.
    
    8. Course refund: If you have attended less than 50% of a course, you may 
       be eligible for a refund.
    
    9. Take notes: Take notes while watching videos and download them as a 
       PDF for later reference.
    
    We are constantly working on new features and improvements, so make sure to check back often to see what's new!
## API Reference
The API for this website is a RESTful API that exposes a set 
of endpoints for interacting with the backend services. 
The base URL for the API is http://localhost:3000/api.

- Endpoints:

      These are just basic examples of what an api request is capable of.It doesn't 
      have to reflect a true API request in our website but makes it easier to 
      understand the references used. 

      1. GET /getcoursebyid/:id: Retrieves a list of all courses based on a specific ID 

      2. GET /viewExam/:id: Retrieves a specific Exam based on a specific ID 

      3. POST /create1 : Admin creates a new Admin

      4. PATCH /discountall : Admin can update the prices of all course based on
         a specific dsicount. 

      5. GET /getProblems : Admin can view all problems submitted to the system.

      6. GET /mostpopular : Gets the most popular courses in the system.

      7. DELETE /delete/:id : Individual trainees & Coorporate trainees can delete 
         a review about an instructor that they have posted based on the id of the 
         user.
      
      8. PATCH /changePassword/:id : Any logged in user can change his/her password
         based on their id.

      9. PATCH /updateCountry/:id : Any user (except for the admin) can change his/her 
         country. 
      
      10. PATCH /editEmail/:id : Both corporate traiees and instructors can edit their
          email based on their IDs. 
      
      11. PATCH /upload : Instructors can upload videos to the subtitles of their courses.

      12. PATCH /preview : Instructors can add preview videos to their courses. 

      13. PATCH /editBio/:id : Instructor can edit his minibiography from within his
          profile based on his ID. 

      14. POST /createSubtitle : Instructor can create multiple subtitles within each course 
          he teaches. 
      
      15. GET /viewExam/:id : Individual trainees & corporate trainees can view subtitle 
          exam in a course they're enrolled in. 

      16. PATCH /requestrefund/:itid/:id : Individual trainee can request a refund if 
          less than 50% of the course has been attended. 

      17. POST /api/logout : log any user out of the system. 

      18. POST /api/login : log any user inside the system based on a given username and 
          password. 
      
      19. PATCH /discount/:id : Instructor can define a discount for a specific course 
          based on its ID. 

      20. get /wallet/:id/:itid : Individual trainees can pay for a course using their wallets
          based on their ID and the course ID.  
      
- Request format:

      All API requests should be made using the Content-Type: application/json header. 
      Requests and responses will be in JSON format.

- Response format:
 
      Successful responses will include a 200 OK status code and a JSON object 
      containing the requested data. Error responses will include an appropriate 
      status code and a JSON object with an error field that describes the problem.


## Tests
## Screenshots
The image shows a webpage with a form for users to create an account.
The form consists of several input fields, including first name , last name,
a field for the user's email address, a field for the user's desired password, 
and gender. There is also a button 
labeled "Sign Up" that the user can click to submit the form.The 
user has to accept the terms and conditions before signing up 
![SignUp](https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema/blob/e9cfa4cf37205757e26f422bc6bc63b07a47e22b/SignUp.png?raw=true)

The image shows a graphical representation of a stripe payment 
component. The student uses the stripe component to pay for a 
course. He can also pay using a wallet that must has sufficient
balance. 
![payment](https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema/blob/485cfef48ab65d59bde64f78ee6d24e7b48fe1b8/Payment.PNG)

This image shows the login component of the application. 
The user can enter their username and password in the appropriate 
fields and click the "Sign In" button to sign in to the application. 
If the user has forgotten their password, they can click the 
"Forgot password?" hyperlink to request a password reset.
![Login component screenshot](https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema/blob/1721241db9724d032284a12c9896f82bdd7d21d7/Login.PNG)

This image shows the page where the admin applies discounts to specific 
courses and the date where the discount expires. The screenshot shows 
the course title and if there's a discount already applied to it. 
![Discounts page screenshot](https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema/blob/1721241db9724d032284a12c9896f82bdd7d21d7/Discount.PNG)

This screenshot shows the create exam component of an online learning 
website. The component allows an instructor to create an exam by 
entering the name of the course, the subtitle number, and the exam name. 
The instructor can then create multiple choice questions by entering the 
question text and four choices. The instructor sets the correct answer. 
![Create exam component screenshot](https://github.com/Advanced-Computer-Lab-2022/Karim-Benzema/blob/1721241db9724d032284a12c9896f82bdd7d21d7/Question.PNG)

## Code Examples 

- Code  snippet from server.js file in the backend file

      app.use(cookieParser());
      //route handler 
      app.use('/api/admin',requireAuth,adminRoutes)
      app.use('/api/instructor',requireAuth,instructorRoutes)
      app.use('/api/it',requireAuth,itRoutes)
      app.use('/api/ct',requireAuth,ctRoutes)
      app.use('/api/courses',coursesRoutes)
      app.use('/api/guest',guestRoutes)
      app.use('/api/subtitle',subtitleRoutes)
      app.use('/api/passwordReset',passwordResetRoutes)
      app.use('/api/register',register)
      app.use('/api/login',login)
      app.use('/api/logout',logout)
      app.use('/api/email',emailRoutes)

      //connect to DB
      mongoose.connect(process.env.MONGO_URI)
      .then(()=>{
      // Listen for requests 
      app.listen(process.env.PORT,() => {
      console.log('Connected to DB & listening on port 4000!')
      })
      })
      .catch((error)=>{
      console.log(error)
      })

  - Explanation : This code snippet is from the server.js file in 
    the backend of a web application. It sets up the Express.js server and defines the routes and middleware for the application.
    Here is a breakdown of what is happening in this code snippet:
    The app.use(cookieParser()) line enables the use of cookies in the application by using the cookie-parser middleware.
    The lines starting with app.use('/api/...') define the routes for the different resources in the application, such as courses, instructors, and users. The requireAuth middleware is used to ensure that only authenticated users can access certain routes, such as the routes for instructors and IT professionals.

    The mongoose.connect method is used to establish a connection to the MongoDB database. It uses the MONGO_URI environment variable to specify the connection string.
    The app.listen method is used to start the server and listen for incoming requests. It uses the PORT environment variable to specify the port number.

    Overall, this code sets up the Express.js server and defines the routes and middleware for the application, and establishes a connection to the MongoDB database. It then starts the server and listens for incoming requests on the specified port.

- Code  snippet from App.js file in the frontend file 

          {/* dont need authentication */}
          <Route path="/completion" element={<Completion/>}/>
          <Route path="/"element={<Home/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/passwordReset/:id/:token"element={<PasswordReset/>}/>
          <Route path="/SignUp"element={<Signup/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Main"element={<Main/>}/>
          <Route path="/viewExamGuest"element={<GuestExam/>}/>
          <Route path="/selectCountryGuest"element={<SelectCountriesGuest/>}/>
          
          {/* if not logged in */}
          {role === undefined ? 
          (
            <Route>
            <Route path='/Login' element={<Login/>}/> 
            <Route path="/GuestCourses"element={<GuestCourses />}/>
            <Route path="/GuestPrice"element={<GuestPrices/>}/>
            <Route path="/viewSubjectRatingGuest"element={<ViewSubjectRatingGuest />}/>
            <Route path="/GuestCourse"element={<GuestCourses/>}/>
            <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
            <Route path="/viewExamGuest"element={<GuestExam/>}/>
            <Route path="/navbarguest"element={<NavbarGuest/>}/>

            </Route>
          )
          :( 
          <Route path='/Login' element={<Login/>}/> 
          )}

    - Explanation : This code snippet appears to be defining routes
      for a web application using the react-router-dom library. It defines several routes using the Route component, and uses the path and element props to specify the URL path and the element to render for each route, respectively.

      The code also includes a conditional statement that checks the value of the role variable. If role is undefined, the code renders a set of routes that do not require the user to be logged in.


## Extra Features
    -Stripe API for credit card payments: https://stripe.com/

    -Exhcange Rate API depending on currency: https://openexchangerates.org/

    -Mailgun to send emails: https://www.mailgun.com/

## Contributing

    We welcome contributions to this project! If you have an idea
    for a new feature, a bug to report, or a bug fix, please don't
    hesitate to open an issue or submit a pull request.

    Please note that this project is still under development and 
    may change rapidly. As a result, we may not be able to accept 
    all contributions. However, we will do our best to review and 
    consider all submissions.

    Here are some specific things you can do to contribute:

    - Report bugs: If you find a bug in the code, please open an 
      issue and provide as much detail as possible about the problem. 
      If possible, please include a minimal reproduction of the issue.

    - Request features: If you have an idea for a new feature or improvement, 
      please open an issue and describe your idea. We are always open to new 
      ideas and suggestions!

    - Submit code: If you would like to contribute code to this project, 
      please fork the repository and submit a pull request. Before submitting 
      your pull request, please make sure to run the tests and ensure that your 
      code is well-formatted and follows our coding standards.

    Thank you for considering contributing to this project! We look forward to working with you.

## Credits and Acknowledgements
We would like to extend our sincere thanks to the following 
individuals for their contributions to this project:

    -Contributor Name: Noha Hamid
    -Contributor Name: Hadwa Pasha
    -Contributor Name: Nada Ibrahim 

We would also like to acknowledge the following resources that 
were used in the development of this project:

    -MERN Stack Tutorial: https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE

    -Stripe Tutorial: https://www.youtube.com/watch?v=e-whXipfRvg

    -Authentication Tutorial: https://www.youtube.com/watch?v=HGgyd1bYWsE&t=6s

    -Nodemailer Tutorial: https://www.youtube.com/watch?v=WncGAo8Vo0A&t=245s

We are grateful for the support and assistance of all those who 
have contributed to this project.


## License

    This project is licensed under the MIT License. This means that you
    are free to use, modify, and distribute the code for any purpose, 
    as long as you include the original copyright and license notice 
    in any copies of the software.

    Please note that this project makes use of several external libraries 
    and APIs, including Stripe, which is licensed under the Apache 2.0 
    license. This means that you may use the Stripe API in your own projects, 
    provided that you follow the terms of the Apache 2.0 license. You can read 
    more about the Apache 2.0 license here.

    This project also makes use of nodemailer and the Open Exchange Rates API 
    for currency conversion. The Open Exchange Rates API is provided under a 
    Creative Commons Attribution-NoDerivatives 4.0 International License. You 
    can read more about the terms of use for this API here. Please make sure 
    to read and understand these licenses before using these resources in your 
    own projects.
