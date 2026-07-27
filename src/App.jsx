import { useState } from 'react';

const App = () => {

  const [availableItems, setAvailableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ])



  const [shoppingCart, setShoppingCart] = useState([])
  const [availableBalance, setAvailableBalance] = useState(100)
  const [msg,setMsg]=useState()

  const handleAddToCart = (item) => {
    const result = availableItems.filter((availableItem) => availableItem.id !== item.id)
    setAvailableItems(result)
    setShoppingCart([...shoppingCart, item])
    setAvailableBalance(availableBalance - item.price)
    
  }

  const handleRemoveFromCart = (item) => {
    const remove = shoppingCart.filter((item) => item.id !==item.id)
    setShoppingCart(remove)
    setAvailableItems([...availableItems, item])
    setAvailableBalance(availableBalance + item.price)
  }

  return (
    <>
      <h1>Zaids Closet</h1>

      <h2>Your Balance: {availableBalance}</h2>
      <h3>{msg}</h3>

      <h2>Available Items:</h2>
      <p>{availableItems.length ? "" : "there is no available item"}</p>
      {availableItems.map((availableItem) => (
        <div>
          <h3>Item Name :{availableItem.name}</h3>
          <p>Price: ${availableItem.price}</p>
          <button onClick={availableBalance >= availableItem.price ?  () => handleAddToCart(availableItem) 
            :() => {setMsg("your balance not enough")
              setTimeout(()=> setMsg("") , 4000)
            }  }>Add to Cart</button>
        </div>
      ))} <br />

      <h2>Shopping Cart</h2>
      {shoppingCart.map((item) => (
        <div>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
        </div>
      ))}
    </>
  )
}

export default App
