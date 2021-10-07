## This is a simple API to manipulation of products database



This api has the routes: 

##### /products 
{
    method: get 
    response: A list of the products 
}

##### /products/id

{ 
    method: get
    response: A product based in his id
}
##### /products 
{
    method:post
    need: body {nombre:"", precio:"", inventario:""}
    response: check if the create has been successfull

}

##### products/id 
{
    method: put
    need: body{nombre:"", precio:"", inventario:""}
    response: Check if the update has been successfull
}

##### products/id
{
    method:delete
    response: Check if the delete has been successfull
}