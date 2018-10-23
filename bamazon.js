var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,


  user: "root",


  password: "root",
  database: "GreatBay_DB"
});


connection.connect(function(err,results) {
  if (err) throw err;
  console.log('connected')

 
});
function start(){
	connection.query('SELECT * FROM products', function(err, res){
		if (err) throw err;
		console.log('Products Available:');

		for(i=0;i<res.length;i++){
			console.log('Item ID:' + res[i].item_id + ' Product Name: ' + res[i].product_name + ' Price: ' + '$' + res[i].price + '(Quantity left: ' + res[i].stock_quantity + ')')
		}
		
		buyItem();
		})
		
}

function buyItem(){
	inquirer.prompt([{
		name: 'id',
		message: 'Please enter the ID of the product you wish to purchase',
		
	},{
		name:'quantity',
		message: 'How many of this product would you like to order?',
		
		
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE item_id = ?', [answer.id], function(err, res){
		if(answer.quantity > res[0].stock_quantity){
			console.log('Insufficient Quantity');
			console.log('This order has been cancelled');
			newOrder();
		}
		else{
			amountOwed = res[0].price * answer.quantity;
			console.log('Thanks for your order');
			console.log('You owe $' + amountOwed);
			connection.query('UPDATE products SET ? Where ?', [{
				stock_quantity: res[0].stock_quantity - answer.quantity
			},{
				id: answer.item_id
			}], function(err, res){});
			newOrder();
		}
	})

}, function(err, res){})
};

function newOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
			buyItem();
		}
		
	})
};
start();
