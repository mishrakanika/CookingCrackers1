To execute:

1) start mongo server in one terminal
mongod -port 3000 -dbpath ./testDB/ -noauth

2) In another terminal go to project directory (CookingCrackers/RecipeExpressServer/CookingCrackers/ )
npm start 
or node AppServer.js


Check browser:
http://localhost:8080/home.html



3) To Create and load scripts

i] start mongo server in one terminal
mongod -port 3000 -dbpath ./testDB/ -noauth


ii] In another terminal go to project directory (CookingCrackers/RecipeExpressServer/CookingCrackers/)
mkdir testDB for MAC
MD testDB for Windows


iii] mongo --port 3000 --authenticationDatabase admin   (starting client)
load ('createDB/createToDoSampleData.js');  (Loading script)
bye


