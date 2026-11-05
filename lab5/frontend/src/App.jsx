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
function Product() {
  return (
    <>
      <h2>Product :Laptop</h2>
      <h3>Price : 34000</h3>
      <p> Review : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nihil amet sint, veniam et similique tempore dignissimos laboriosam adipisci minima?</p>
    </>
  )
}
  

function App() {
  

  return (
    <>
      <h1>hello meri jaan</h1>
     
    
      <Hello />
      <Product />
    </>
  )
}
// when any js function return html contents directly , called components 
// components must return html and start with capital letter 
// 

export default App
