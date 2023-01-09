db.createUser(
    {
        user : "test",
        pwd : "test",
        roles : [
            {
                role : "readWrite",
                db   : "shoppingapp-db"
            }
        ]
    }
)

db = new Mongo().getDB("shoppingapp-db");

db.createCollection('users', { capped: false });
db.createCollection('cart', { capped: false });
db.createCollection('products', { capped: false });