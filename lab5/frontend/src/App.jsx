function Hello() {
  return (
    <>
      <h1> Learning React is Easy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quae!
      </p>
    </>
  );

}
function Product(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
     <h3>{props.rating}</h3>
     <h3>{props.review}</h3>
    </>
  )
}
  

function App() {
  const item = {
    name: "Mobile Phone",
    price: 25000,
    rating: 4.6,
    review: 1500,
  };
  const item2 = {
    name: "laptop",
    price: 250000,
    rating: 4.9,
    review: "This is best laptop",
  };

  return (
    <>
      <Product{...item}/>
      <h1>hello meri jaan</h1>
      <Hello />
      <Product{...item2} />
    </>
  )
}
// when any js function return html contents directly , called components 
// components must return html and start with capital letter 
// 

export default App
