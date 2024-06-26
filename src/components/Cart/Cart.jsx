const Cart = ({ cart }) => {
  return (
    <div>
      {Object.keys(cart).map((key) => (
        <div key={key}>{cart[key].title}
        <p>{cart[key].quantity}</p>
        </div>
        
      ))}
    </div>
  );
};

export default Cart;