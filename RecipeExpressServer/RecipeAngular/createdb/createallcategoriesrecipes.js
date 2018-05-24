db = db.getSiblingDB('Recipesdb')
db.createCollection('mealtype')  //earlier it was lists
mealtypeCollection = db.getCollection("mealtype") //earlier it was lists & mealtypeCollection was listsCollection
mealtypeCollection.remove({})   //mealtypeCollection was listsCollection
mealtypeCollection.insert(   //mealtypeCollection was listsCollection
{
      name: "Breakfast",
      mealtId: 1,
      
}
)
mealtypeCollection.insert(
{
      name: "Lunch",
      mealtId: 2,
}
)
mealtypeCollection.insert(
{
      name: "Dinner",
      lmealtId: 3,

})
mealtypeCollection.insert(
    {
          name: "Midnight Snacks",
          mealtId: 4,
    
    }
)
mealtypeCollection.insert(
    {
          name: "Desserts",
          mealtId: 5,
    
    }
)
db = db.getSiblingDB('Recipesdb')
db.createCollection('cuisinetype')  //earlier it was lists
cuisinetypeCollection = db.getCollection("cuisinetype") //earlier it was lists & cuisinetypeCollection was listsCollection
cuisinetypeCollection.remove({})  //cuisinetypeCollection was listsCollection
cuisinetypeCollection.insert(  //cuisinetypeCollection was listsCollection
{
      name: "Indian",
      cuisinetId: 1,
      
}
)
cuisinetypeCollection.insert(
{
      name: "Mexican",
      cuisinetId: 2,
}
)
cuisinetypeCollection.insert(
{
      name: "Italian",
      cuisinetId: 3,

})
cuisinetypeCollection.insert(
    {
          name: "Chinese",
          cuisinetId: 4,
    
    }
)
cuisinetypeCollection.insert(
    {
          name: "Mediterranean",
          cuisinetId: 5,
    
    }
)
db = db.getSiblingDB('Recipesdb')
db.createCollection('mealpreference')  //earlier it was lists
mealpreferenceCollection = db.getCollection("mealpreference") //earlier it was lists & mealpreferenceCollection was listsCollection
mealpreferenceCollection.remove({})  //mealpreferenceCollection was listsCollection
mealpreferenceCollection.insert(  //mealpreferenceCollection was listsCollection
{
      name: "Indian",
      mealpId: 1,
      
}
)
mealpreferenceCollection.insert(
{
      name: "Mexican",
      mealpId: 2,
}
)
mealpreferenceCollection.insert(
{
      name: "Italian",
      mealpId: 3,

})
mealpreferenceCollection.insert(
    {
          name: "Chinese",
          mealpId: 4,
    
    }
)
mealpreferenceCollection.insert(
    {
          name: "Mediterranean",
          mealpId: 5,
    
    }
)


