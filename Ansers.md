I created some docker workaround so i dont have to install npm and other things localy.


I guess it's not the error i should find but there is no db after app start. If you look into the db with a db tool while running the app or test, the db "node_mysql_ts" never exists.
Some reasonse: 

There are no instructions to start the app. I used `npm run start:js` and `npm run test:e2e`.

There is an "./sql/db.sql" holding the create db command which is never invoked. Theere should be some function or 
npm command to init the db.

I doubt "mysql" package works with promises out of the box. At least they dont mention that on npm. Maybe it would with "promise-mysql" or something 
similar. Or it's a typescript thing i dont know.

You should not throw results from db queries away (create and others) without checking for errors and respond with static messages.
