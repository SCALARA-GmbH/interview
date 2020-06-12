I guess it's not the error i should find but there is no db after app start. If you look into the db with a db tool while running the app or test, the db "node_mysql_ts" never exists.
Two reasonse: First, there is an "./sql/db.sql" holding the create db command which is never invoked. Theere should be some function or 
npm command to init the db.

Second, i doubt "mysql" package works with promises out of the box. At least they dont mention that on npm. Maybe it would with "promise-mysql" or something 
similar. Or it's a typescript thing i dont know.

And you should not throw results from db queries away and respond with static messages.
