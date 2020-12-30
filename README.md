### Storify is a web application where users can create/add their own stories and can read the stories of other users. I have used the interative CKEditor which has cool in-build features. 

**Technologies Used:** NodeJs | ExpressJs | MongoDB | Passportjs with a Google OAuth strategy
 
 User need to login using Google SignIn to access the dashboard:
 
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/login-page.png)

User will be directed to the dashboard:
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/empty%20dashboard.png)
 
 User can create the story by clicking on the + button on buttom-right of page.
  ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/creating%20public%20story.png)

User can create a private story as well by chossing the status accordingly from dropdown:
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/creating%20private%20story.png)
 
 Dashaboard page has both the stories created by user with Edit button and Delete Button.
  ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/dashboard%20with%20stories.png)
  
  Now, if we click on the Count Wisely, single story page will be shown
  ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/Screenshot%20(246).png)

This is the side navbar for navigation to dashboard, public stories and for logging-out
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/sidenav.png)

This page shows all the public stories created by user sorted by date and time. It has story named Count Wisely just created by Ritika Jain and it also has the edit button. But other stories doen't have edit button because those are not created by Ritika.
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/all%20public%20stories.png)

If we change the status of Count Wisely story to private by clicking on edit button
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/edit%20story.png)

Now, the public stories page doesn't contain the Count Wisely story because we have made it public
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/all%20public%20stories%20without%20ritika%20private.png)

If we click on the Read More button on The Ant and The Dove story created by Krish Goyal, this page will be shown
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/single%20user%20story.png)

We can see all the stories created my Krish Goyal by clicking on the More From Krish Goyal
 ![alt text](https://github.com/RitikaJain8818/Storify/blob/master/images/all%20user%20stories.png)


**Functionalities:**

Google Authorization using Google OAuth Strategy                                                              
Users can make their story either public or private                                               
Edit the story                                                               
Delete the story                                                             
Cannot edit/delete story of other users                                                    
View the profile of the users they are interested in and can see all of their stories

