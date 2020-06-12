Task1: Blog Posts

Q1:

First I would have ask in sprint planning or similar meeting to split the ticket since comments and users are two seperate features.
Since there is no clear question, i guess reading the note about ERD it's about Foreign-/Keys. Please tell me if i miss something here.

We need an user with an user_id and some other user related stuff and a comment with comment_id and some comments stuff.
Now posts get an user_id as Foreign Key while comments get user_id and post_id as Foreign Key. User does not get any Foreign Keys.


Q2:

The ticket includes the following subtasks:
  1. Create new user and comment database tables
  2. Alter the post table and add user_id as Foreign Key and handle the missing keys (e.g. that it accepts null values)
  3. Define the user and comment interface
  4. Write the controllers with CRUD functionality for users and comments (well, in RL user management would be more complex than just CRUD)
  5. Define the new routes for users and comments
  6. Update the post interface
  7. Write tests for the new or altered stuff
  8. Make Pull Request, QA, deploy

I would estimate about 2-3 hours for point 1 to 6 plus 2-3 hours for testing and another X hours for point 8 depending on the work 
environment. So we end at 4-6 + x hours of work.


Q3:

Well it will work and it will work for a long time just fine. Bad thing is, you will need later on a lot of joins wich costs performance 
(e.g. for "give me the post where user with name x commented"). But performance is relativly cheap these days.

On the other hand you could take a document based DB like MongoDB. This eliminates most of the joins but you have to maintain redundant data
on different positions. Like you save posts and comment ids in an array on users and you save comments in an array on the post they belong
to. This is more a task for devs and devs are not that cheap.

Conclusion: If this is in production with prod data, stick with SQL. If this is a greenfield mill project, decide according to your 
resources.
