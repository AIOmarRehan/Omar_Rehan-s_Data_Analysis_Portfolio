//Create a database
use NexusBuy

//Create a collections
db.createCollection("Customers")
db.createCollection("Categories")
db.createCollection("Products")
db.createCollection("Orders")
db.createCollection("OrderItems")
db.createCollection("CartItems")
db.createCollection("Reviews")

//Insert data to the collections, and see the relations between them to link or embedding the collections to each other
db.Customers.insertMany([
  {
    "Name": "John Doe",
    "Email": "johndoe@example.com",
    "Password": "password123",
    "Address": "123 Main St",
    "Phone": "555-123-4567",
    "PaymentInfo": "Credit Card"
  },
  {
    "Name": "Jane Smith",
    "Email": "janesmith@example.com",
    "Password": "pass456",
    "Address": "456 Elm St",
    "Phone": "555-987-6543",
    "PaymentInfo": "PayPal"
  },
  {
    "Name": "Mike Johnson",
    "Email": "mikejohnson@example.com",
    "Password": "securepass",
    "Address": "789 Oak Ave",
    "Phone": "555-456-7890",
    "PaymentInfo": "Debit Card"
  },
  {
    "Name": "Emily Williams",
    "Email": "emilywilliams@example.com",
    "Password": "pass123",
    "Address": "321 Pine Rd",
    "Phone": "555-789-1234",
    "PaymentInfo": "Credit Card"
  },
  {
    "Name": "David Brown",
    "Email": "davidbrown@example.com",
    "Password": "brown123",
    "Address": "567 Maple St",
    "Phone": "555-234-5678",
    "PaymentInfo": "PayPal"
  }
])

db.Categories.insertMany([
  {
    "Name": "Electronics"
  },
  {
    "Name": "Clothing"
  },
  {
    "Name": "Home Appliances"
  },
  {
    "Name": "Books"
  },
  {
    "Name": "Toys"
  }
])

db.Products.insertMany([
  {
    "Name": "T-Shirt",
    "Description": "Comfortable cotton t-shirt",
    "Price": 19.99,
    "Quantity": 50,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8aa"),
      "Name": "Clothing"
    }
  },
  {
    "Name": "Smartphone",
    "Description": "High-performance smartphone",
    "Price": 79.99,
    "Quantity": 30,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8a9"),
      "Name": "Electronics"
    }
  },
  {
    "Name": "Laptop",
    "Description": "Powerful and portable laptop",
    "Price": 999.99,
    "Quantity": 10,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8a9"),
      "Name": "Electronics"
    }
  },
  {
    "Name": "Cookware Set",
    "Description": "High-quality cookware set",
    "Price": 149.99,
    "Quantity": 20,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8ab"),
      "Name": "Home Appliances"
    }
  },
  {
    "Name": "Novel",
    "Description": "Bestselling novel",
    "Price": 9.99,
    "Quantity": 100,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8ac"),
      "Name": "Books"
    }
  }
]);

db.Orders.insertMany([
  {
    "OrderDate": ISODate("2023-05-01"),
    "TotalAmount": 39.98,
    "ShippingAddress": "123 Main St, City, Country",
    "PaymentStatus": "Paid",
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    }
  },
  {
    "OrderDate": ISODate("2023-05-02"),
    "TotalAmount": 999.99,
    "ShippingAddress": "456 Elm St, City, Country",
    "PaymentStatus": "Paid",
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a5"),
      "Name": "Jane Smith",
      "Email": "janesmith@example.com"
    }
  },
  {
    "OrderDate": ISODate("2023-05-03"),
    "TotalAmount": 59.97,
    "ShippingAddress": "789 Oak St, City, Country",
    "PaymentStatus": "Pending",
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a8"),
      "Name": "David Brown",
      "Email": "davidbrown@example.com"
    }
  },
  {
    "OrderDate": ISODate("2023-05-04"),
    "TotalAmount": 159.98,
    "ShippingAddress": "321 Pine St, City, Country",
    "PaymentStatus": "Paid",
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    }
  },
  {
    "OrderDate": ISODate("2023-05-05"),
    "TotalAmount": 9.99,
    "ShippingAddress": "654 Maple St, City, Country",
    "PaymentStatus": "Paid",
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a7"),
      "Name": "Emily Williams",
      "Email": "emilywilliams@example.com"
    }
  }
]);

db.OrderItems.insertMany([
  {
    "Quantity": 2,
    "UnitPrice": 19.99,
    "Order": {
      "OrderID": ObjectId("64737bbecc2f5fb86850c8b3"),
      "OrderDate": ISODate("2023-05-01"),
      "TotalAmount": 39.98,
      "ShippingAddress": "123 Main St, City, Country",
      "PaymentStatus": "Paid"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Quantity": 1,
    "UnitPrice": 999.99,
    "Order": {
      "OrderID": ObjectId("64737bbecc2f5fb86850c8b4"),
      "OrderDate": ISODate("2023-05-02"),
      "TotalAmount": 999.99,
      "ShippingAddress": "456 Elm St, City, Country",
      "PaymentStatus": "Paid"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b0"),
      "Name": "Laptop",
      "Description": "Powerful and portable laptop",
      "Price": 999.99,
      "Quantity": 10
    }
  },
  {
    "Quantity": 3,
    "UnitPrice": 19.99,
    "Order": {
      "OrderID": ObjectId("64737bbecc2f5fb86850c8b5"),
      "OrderDate": ISODate("2023-05-03"),
      "TotalAmount": 59.97,
      "ShippingAddress": "789 Oak St, City, Country",
      "PaymentStatus": "Pending"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Quantity": 2,
    "UnitPrice": 79.99,
    "Order": {
      "OrderID": ObjectId("64737bbecc2f5fb86850c8b6"),
      "OrderDate": ISODate("2023-05-04"),
      "TotalAmount": 159.98,
      "ShippingAddress": "321 Pine St, City, Country",
      "PaymentStatus": "Paid"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8af"),
      "Name": "Smartphone",
      "Description": "High-performance smartphone",
      "Price": 79.99,
      "Quantity": 30
    }
  },
  {
    "Quantity": 1,
    "UnitPrice": 9.99,
    "Order": {
      "OrderID": ObjectId("64737bbecc2f5fb86850c8b7"),
      "OrderDate": ISODate("2023-05-05"),
      "TotalAmount": 9.99,
      "ShippingAddress": "654 Maple St, City, Country",
      "PaymentStatus": "Paid"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b2"),
      "Name": "Novel",
      "Description": "Bestselling novel",
      "Price": 9.99,
      "Quantity": 100
    }
  }
]);

db.CartItems.insertMany([
  {
    "Quantity": 2,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Quantity": 2,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8af"),
      "Name": "Smartphone",
      "Description": "High-performance smartphone",
      "Price": 79.99,
      "Quantity": 30
    }
  },
  {
    "Quantity": 1,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a5"),
      "Name": "Jane Smith",
      "Email": "janesmith@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b0"),
      "Name": "Laptop",
      "Description": "Powerful and portable laptop",
      "Price": 999.99,
      "Quantity": 10
    }
  },
  {
    "Quantity": 2,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a8"),
      "Name": "David Brown",
      "Email": "davidbrown@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Quantity": 1,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a7"),
      "Name": "Emily Williams",
      "Email": "emilywilliams@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b2"),
      "Name": "Novel",
      "Description": "Bestselling novel",
      "Price": 9.99,
      "Quantity": 100
    }
  }
]);

db.Reviews.insertMany([
  {
    "Rating": 4.5,
    "Comment": "Great product!",
    "ReviewDate": ISODate("2023-05-01"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Rating": 5,
    "Comment": "Excellent smartphone!",
    "ReviewDate": ISODate("2023-05-02"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8af"),
      "Name": "Smartphone",
      "Description": "High-performance smartphone",
      "Price": 79.99,
      "Quantity": 30
    }
  },
  {
    "Rating": 3.5,
    "Comment": "Decent laptop, but a bit pricey.",
    "ReviewDate": ISODate("2023-05-03"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a5"),
      "Name": "Jane Smith",
      "Email": "janesmith@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b0"),
      "Name": "Laptop",
      "Description": "Powerful and portable laptop",
      "Price": 999.99,
      "Quantity": 10
    }
  },
  {
    "Rating": 4,
    "Comment": "Love this T-shirt!",
    "ReviewDate": ISODate("2023-05-04"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a8"),
      "Name": "David Brown",
      "Email": "davidbrown@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Rating": 4.5,
    "Comment": "Great novel, couldn't put it down!",
    "ReviewDate": ISODate("2023-05-05"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a7"),
      "Name": "Emily Williams",
      "Email": "emilywilliams@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8b2"),
      "Name": "Novel",
      "Description": "Bestselling novel",
      "Price": 9.99,
      "Quantity": 100
    }
  }
]);

//Show the created collections and see the data inside them
db.Customers.find()
db.Products.find()
db.Categories.find()
db.Orders.find()
db.OrderItems.find()
db.CartItems.find()
db.Reviews.find()


																				//*CRUD Operations*//

																			//*First the "Customers" collection*//

//Now we can insert two different documents "Birth of date" and "Age" for "Customers" collection, which we can calculate the age based on the customer's birth of date.
db.Customers.aggregate([
  {
    $addFields: {
      Birthdate: {
        $cond: {
          if: { $ne: ["$Name", ""] },
          then: {
            $dateFromString: {
              dateString: {
                $switch: {
                  branches: [
                    { case: { $eq: ["$Name", "John Doe"] }, then: "1990-05-15" },
                    { case: { $eq: ["$Name", "Jane Smith"] }, then: "1985-09-20" },
                    { case: { $eq: ["$Name", "Mike Johnson"] }, then: "1988-03-10" },
                    { case: { $eq: ["$Name", "Emily Williams"] }, then: "1992-11-28" },
                    { case: { $eq: ["$Name", "David Brown"] }, then: "1997-07-05" }
                  ],
                  default: ""
                }
              }
            }
          },
          else: null
        }
      }
    }
  },
  {
    $addFields: {
      Age: {
        $cond: {
          if: { $ne: ["$Birthdate", null] },
          then: {
            $subtract: [
              { $year: new Date() },
              { $year: "$Birthdate" }
            ]
          },
          else: null
        }
      }
    }
  }
]).forEach(function (doc) {
  db.Customers.updateOne({ _id: doc._id }, { $set: { Birthdate: doc.Birthdate, Age: doc.Age } });
});

//If we need to delete these two documents "Birth of date" and "Age", simply we can use these queries.
db.Customers.updateMany(
  {},
  { $unset: { Age: 1 } } // Remove the DateOfBirth field from all documents
);

db.Customers.updateMany(
  {},
  { $unset: { Birthdate: 1 } } // Remove the DateOfBirth field from all documents
);

//New Customers have been created an accounts
db.Customers.insertMany([
  {
    "Name": "Alice Johnson",
    "Email": "alicejohnson@example.com",
    "Password": "pass123",
    "Address": "123 Main St",
    "Phone": "555-111-2222",
    "PaymentInfo": "PayPal",
    "Birthdate": ISODate("1995-09-20"),
    "Age": 28
  },
  {
    "Name": "Bob Williams",
    "Email": "bobwilliams@example.com",
    "Password": "password456",
    "Address": "456 Elm St",
    "Phone": "555-333-4444",
    "PaymentInfo": "Credit Card",
    "Birthdate": ISODate("1988-07-10"),
    "Age": 35
  },
  {
    "Name": "Emma Davis",
    "Email": "emmadavis@example.com",
    "Password": "pass789",
    "Address": "789 Oak Ave",
    "Phone": "555-555-6666",
    "PaymentInfo": "Debit Card",
    "Birthdate": ISODate("1992-12-05"),
    "Age": 30
  }
])

//Customer can update his/her account
db.Customers.updateOne(
  { "Email": "emmadavis@example.com" }, // Specify the criteria to find the document(s) to update
  {
    $set: { // Use the $set operator to update specific fields
      "Email": "newemail@example.com", // Update the Email field
      "Phone": "555-777-8888", // Update the Phone field
      "Address": "456 Maple St" // Update the Address field
    }
  }
)

//Customer can delete his/her account
db.Customers.deleteOne(
  { "Name": "David Brown" }, // Specify the filter to find the document to delete
)

//Many customers can delete their account
db.Customers.deleteMany(
  { "Name": { $in: ["Emily Williams", "Bob Williams"] } } // Specify the filter with $in operator
)

																			//*Second the "Categories" collection*//

//Add a new Category
db.Categories.insertOne({
  "Name": "Furniture"
});

//Delete a Category
db.Categories.deleteOne({
  "Name": "Books"
});

//Update a Category
db.Categories.updateOne(
  { "Name": "Electronics" }, // Specify the filter to find the document to update
  { $set: { "Name": "Gadgets" } } // Specify the new value using $set operator
);

//Add a many Categories on one query
db.Categories.insertMany([
  { "Name": "School" },
  { "Name": "Sports" },
  { "Name": "Beauty" }
]);

//Delete a many Categories on one query
db.Categories.deleteMany({
  "Name": { $in: ["Beauty", "School"] }
});

//Update a many Categories on one query
db.Categories.updateMany(
  { "Name": { $in: ["Toys", "Sports"] } }, // Specify the filter to find the documents to update
  [
    {
      $set: {
        "Name": {
          $switch: {
            branches: [
              { case: { $eq: ["$Name", "Toys"] }, then: "NewToys" },
              { case: { $eq: ["$Name", "Sports"] }, then: "NewSports" },
            ],
            default: "$Name",
          },
        },
      },
    },
  ]
);

																			//*Third the "Products" collection*//

//Update to a one Product
db.Products.updateOne(
  { "Name": "T-Shirt" }, // Specify the filter to find the document to update
  { $set: { "Price": 24.99, "Quantity": 40 } } // Specify the new values using $set operator
);

//Delete a one Product
db.Products.deleteOne(
  { "Name": "Laptop" } // Specify the filter to find the document to delete
);

//Insert a new Product
db.Products.insertOne({
  "Name": "Headphones",
  "Description": "High-quality headphones",
  "Price": 49.99,
  "Quantity": 15,
  "Category": {
    "CategoryID": ObjectId("64737b22cc2f5fb86850c8a9"),
    "Name": "Electronics"
  }
});

//Update Multiple Products under Category Electronics
db.Products.updateMany(
  { "Category.Name": "Electronics" }, // Specify the filter to find the documents to update
  { $mul: { "Price": 1.1 } } // Multiply the price by 1.1 to increase it by 10%
);

//Insert Multiple Products
db.Products.insertMany([
  {
    "Name": "Shoes",
    "Description": "Stylish sneakers",
    "Price": 59.99,
    "Quantity": 20,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8aa"),
      "Name": "Clothing"
    }
  },
  {
    "Name": "TV",
    "Description": "High-definition television",
    "Price": 799.99,
    "Quantity": 5,
    "Category": {
      "CategoryID": ObjectId("64737b22cc2f5fb86850c8a9"),
      "Name": "Electronics"
    }
  }
]);

// Delete Multiple Products with a quantity less than 10
db.Products.deleteMany(
  { "Quantity": { $lt: 10 } } // Specify the filter to find the documents to delete
);

																			//*Fourth the "Orders" collection*//

// Retrieve all orders
db.Orders.find();

// Retrieve orders with specific Status
db.Orders.find({ "PaymentStatus": "Paid" });

// Retrieve orders within a specific date range
db.Orders.find({
  "OrderDate": {
    $gte: ISODate("2023-05-01"),
    $lte: ISODate("2023-05-31")
  }
});

// Group orders by customer and calculate the total order amount for each customer
db.Orders.aggregate([
  {
    $group: {
      _id: "$Customer.CustomerID",
      TotalAmount: { $sum: "$TotalAmount" }
    }
  }
]);

// Calculate the average order amount
db.Orders.aggregate([
  {
    $group: {
      _id: null,
      AverageAmount: { $avg: "$TotalAmount" }
    }
  }
]);

// Calculate the total sales by month
db.Orders.aggregate([
  {
    $group: {
      _id: { $month: "$OrderDate" },
      TotalSales: { $sum: "$TotalAmount" }
    }
  }
]);

// Update orders that meet certain criteria (If needed)
db.Orders.updateMany(
  { "PaymentStatus": "Pending" }, // Specify the filter to find the documents to update
  { $set: { "PaymentStatus": "Paid" } } // Set the new value using $set operator
);

// Delete orders that meet certain criteria (if needed)
db.Orders.deleteMany(
  { "PaymentStatus": "Cancelled" } // Specify the filter to find the documents to delete
);

																			//*Fifth the "Order Items" collection*//

//Calculate the total revenue for each order
db.OrderItems.aggregate([
  {
    $group: {
      _id: "$Order.OrderID",
      TotalRevenue: { $sum: { $multiply: ["$UnitPrice", "$Quantity"] } }
    }
  }
]);

//Get the average quantity of products ordered
db.OrderItems.aggregate([
  {
    $group: {
      _id: null,
      AverageQuantity: { $avg: "$Quantity" }
    }
  }
]);

//Find the orders with the highest total amount
db.OrderItems.aggregate([
  {
    $group: {
      _id: "$Order.OrderID",
      TotalAmount: { $sum: { $multiply: ["$UnitPrice", "$Quantity"] } }
    }
  },
  { $sort: { TotalAmount: -1 } },
  { $limit: 5 }
]);

//Count the number of orders with different payment statuses
db.OrderItems.aggregate([
  {
    $group: {
      _id: "$Order.PaymentStatus",
      Count: { $sum: 1 }
    }
  }
]);

																			//*Sixth the "Cart Items" collection*//

//Update a one cart item
db.CartItems.updateOne(
  { "Product.ProductID": ObjectId("64737b72cc2f5fb86850c8ae"), "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") },
  { $set: { "Quantity": 3 } }
);

//Insert a new one cart item
db.CartItems.insertOne({
  "Quantity": 1,
  "Customer": {
    "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a5"),
    "Name": "Jane Smith",
    "Email": "janesmith@example.com"
  },
  "Product": {
    "ProductID": ObjectId("64737b72cc2f5fb86850c8b1"),
    "Name": "Cookware Set",
    "Description": "High-quality cookware set",
    "Price": 149.99,
    "Quantity": 20
  }
});

//Delete one cart item
db.CartItems.deleteOne({ "Product.ProductID": ObjectId("64737b72cc2f5fb86850c8af"), "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") });

//Update multiple cart items
db.CartItems.updateMany(
  { "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") },
  { $inc: { "Quantity": 1 } }
);

//Insert multiple cart items
db.CartItems.insertMany([
  {
    "Quantity": 2,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a6"),
      "Name": "Alex Johnson",
      "Email": "alexjohnson@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
  {
    "Quantity": 3,
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a6"),
      "Name": "Alex Johnson",
      "Email": "alexjohnson@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8af"),
      "Name": "Smartphone",
      "Description": "High-performance smartphone",
      "Price": 79.99,
      "Quantity": 30
    }
  }
]);

//Delete multiple cart items
db.CartItems.deleteMany({ "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a6") });

																			//*Seventh the "Reviews" collection*//

//The same customer can put another review to another product
db.Reviews.insertMany([
  {
    "Rating": 4.5,
    "Comment": "This T-Shirt also is nice!",
    "ReviewDate": ISODate("2023-05-01"),
    "Customer": {
      "CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4"),
      "Name": "John Doe",
      "Email": "johndoe@example.com"
    },
    "Product": {
      "ProductID": ObjectId("64737b72cc2f5fb86850c8ae"),
      "Name": "T-Shirt",
      "Description": "Comfortable cotton t-shirt",
      "Price": 19.99,
      "Quantity": 50
    }
  },
]);

//Customer can update his/her Review
db.Reviews.updateOne(
  { "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") },
  { $set: { "Rating": 5, "Comment": "Excellent product!" } }
);

//Customer can delete his/her Review
db.Reviews.deleteOne(
  { "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") }
);

//Customer can update Multiple Reviews
db.Reviews.updateMany(
  { "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") },
  { $set: { "Rating": 5, "Comment": "Excellent product!" } }
);

//Customer can delete multiple Reviews
db.Reviews.deleteMany(
  { "Customer.CustomerID": ObjectId("64737b1fcc2f5fb86850c8a4") }
);