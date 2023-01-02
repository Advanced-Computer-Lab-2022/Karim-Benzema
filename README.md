
# Online Learning System

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
## Features and Functionalities 

- Learning Management System: 

      We ensure that from the moment the student registers for a course, 
      he can navigate all the course details (ratings, reviews), watch 
      vidoes, solve exams that are automatically corrected, take notes 
      while watching the videos, and receives a certificate as the course
      progress reaches 100%. The student can rate a course or an 
      instructor. He can also report problems to the administrator. The 
      student can pay for the course using his wallet or credit card and 
      can refund a course if the progress is less than 50%.

- Instructor Authorities: 

      The instructor can create a course , with
      multiple subtitles, each course must has a video explaining it and
      and an exercise to test the student's progress. An instructor can 
      view his ratings and reviews and report problems to the 
      administrator. 

- Admin Authorities:

      1. Add users to the system.
      2. Issue refund to the student.
      3. Resolve problems from all users.
      4. Add discount to the courses 
      5. Accept coorporate trainee course requests. 
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
and install the required npm packages using the following command:

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


## Dependencies and Requirements
- Required programming languages:

      -Node.js (version 10 or higher)
      -JavaScript
- Required libraries and frameworks:

      -Express (web application framework for Node.js)
      -React (JavaScript library for building user interfaces)
      -MongoDB (database management system)
- Required tools and utilities:

      -npm (package manager for Node.js)
      -Git (version control system)
- System requirements:

      A machine with an operating system that supports Node.js (such as
      macOS, Windows, or Linux)
## API Reference
The API for this website is a RESTful API that exposes a set 
of endpoints for interacting with the backend services. 
The base URL for the API is http://localhost:3000/api.

- Endpoints:

      These are just basic examples of what an api request is capable of.It doesn't 
      have to reflect a true API request in our website but makes it easier to 
      understand the references used. 

      -GET /getcoursebyid/:id: Retrieves a list of all courses based on a specific ID 

      -GET /viewExam/:id: Retrieves a specific Exam based on a specific ID 

      -POST /create1 : Creates a new Admin

      -PATCH /discountall: Updates the prices of all course based on
      a specific dsicount. 

- Request format:

      All API requests should be made using the Content-Type: application/json header. 
      Requests and responses will be in JSON format.

- Response format:
 
      Successful responses will include a 200 OK status code and a JSON object 
      containing the requested data. Error responses will include an appropriate 
      status code and a JSON object with an error field that describes the problem.


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




## How to use?
- Sign up: 
        
        Only the individual trainee can SignUp. 
  
- Login:

        1. Go to the login page.
        2. Enter your username and password.
        3. Click the "Log In" button.

        You will be directed to your dashboard,
        where you can access the features and functions
        available to your user type.
- Individual Trainee: 
        
        As an individual trainee, you play the role of a student on the online learning platform. Your responsibilities may include:
        
        1. Enrolling in courses that interest you
        2. Completing assignments and quizzes
        3. Watching subtitle Videos.
        4. Tracking your progress and staying motivated
        5. Rate courses and instructors
        6. Report Problems to the administator
        7. Request a refund for an unattended course

        As an individual trainee, you have access to the full course
        catalog and can choose which courses to take and when to complete them. 
        You can work at your own pace, but you should aim to meet deadlines
        and complete assignments to the best of your ability.
        Your participation in the online learning platform will depend 
        on your goals and motivations. Some students may be looking to learn 
        new skills or advance their careers, while others may be taking courses 
        for personal enrichment. Regardless of your reasons for enrolling, it is 
        important to approach your studies with dedication and a willingness to learn.

- Corporate Trainee: 

        As a corporate trainee, you have access to a limited number of courses that have 
        been provided by your company. Unlike individual trainees, you do not have the 
        ability to browse the full course catalog and choose which courses to take.
        Your role as a corporate trainee is to complete the assigned courses and assignments
        to the best of your ability. You may be able to track your progress, but your access
        to the online learning platform will be more restricted than that of an individual 
        trainee. You can't view the prices of courses.
        
        If you need access to additional courses or resources, you may need to request them 
        through the admin. The admin has the ability to grant or deny your request based on 
        the needs and policies of your company.
        
        It is important for corporate trainees to follow the guidelines and protocols set by 
        their company and the online learning platform. You should aim to complete your courses 
        and assignments in a timely manner and communicate any issues or concerns to the admin
        or instructors as needed.

- Instructor: 
        
        As an instructor on an online learning platform, your role is to create 
        and manage courses and assignments, and to provide guidance and support to students.
        Your responsibilities may include:
        
        1. Developing course materials and learning objectives
        2. Creating and grading assignments and quizzes
        3. Monitor his ratings and reviews. 
        4. Monitoring how many students are enrolled in his courses

        As an instructor, you have a significant impact on the learning experience of your students.
        It is important to be organized, responsive, and accessible to your students, and to provide
        a challenging yet supportive learning environment.

        You may also be responsible for maintaining the quality and integrity of your courses,
        including keeping course materials up-to-date and adhering to academic standards. You should 
        also be familiar with the policies and guidelines of the online learning platform and follow 
        them in your teaching practices.


- Admin: 
        
        As an admin on an online learning platform, your role is to manage the overall operation 
        and administration of the platform. Your responsibilities may include:

        1. Adding users to the system (admins, instructors, Corporate trainee)
        2. Managing user accounts and permissions
        3. Grant or refuse course access to corporate trainees.
        4. Handling technical issues and reports
        5. Ensuring compliance with platform policies and guidelines
        6. Issue Refund to individual trainees

        As an admin, you have a wide range of responsibilities and a significant level of control 
        over the platform. You should be organized, detail-oriented, and able to multitask in order 
        to effectively manage the platform.

        You may also be responsible for maintaining the security and integrity of the platform, including 
        protecting user data and ensuring that the platform is operating smoothly. You should be familiar
        with the policies and guidelines of the platform and ensure that they are being followed by all users.



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


