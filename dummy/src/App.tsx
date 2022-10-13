
function App() {

  const name="Pallavi"
  const Store = () => {
    localStorage.setItem('UserID', name);
    localStorage.setItem('Password', "snehal");
    localStorage.setItem('Comments', "Harshith's TV");
  }

  const Delete=()=>{
    alert(localStorage.getItem('Comments'))
  }
  
  
  
  return (
    <div className="App">
   <button onClick={Store}>Store</button>
   <button onClick={Delete}>Get</button>
    </div>
  );
}

export default App;
