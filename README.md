## MEVN Stack of MySQL, Express, Vue.js and Node

This is a quick example of a CRUD app using Node for the server side and Vue.js for the client side.

[This video was very helpful.](https://www.youtube.com/watch?v=9Kju3DovLrg)

### Server side

In this example, the database is named ```nodejs-tasks```.

Your database table of tasks should look a little like this:

```
CREATE TABLE `tbl_tasks` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `task_name` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
```

```
$ npm install
$ npm start
```

### Client side

```
$ npm install
$ npm run serve
```
Visit [http://localhost:8080/#/](http://localhost:8080/#/)
