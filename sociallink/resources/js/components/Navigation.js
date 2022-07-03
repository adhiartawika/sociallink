import React from 'react'
function Navigation() {
  
  const PassToComponentCompany= () =>{
    let elem = document.getElementById('middlepage');
    elem.scrollIntoView(true)
  }
  const PassToComponentHome = () =>{
    let elem = document.getElementById('middlepage');
    elem.scrollIntoView(true)
  }
  const PassToComponentProduk = () =>{
    let elem = document.getElementById('halamanproduk');
    console.log(elem)
    elem.scrollIntoView(true)
  }
  return (
      <div className='container-nav'>
        <div className="title-usaha" onClick={()=>PassToComponentCompany()}>
          <label>Social <span className="animate-slash"></span><span>Link.</span></label>
          <div className="bar"></div>
        </div>
          <div className='navbar-list'>
              <div className='block-component topblock'>
                  <a onClick={()=>PassToComponentHome()}>Home</a>
              </div>
              <div className='block-component middleblock'>
                  <a onClick={()=>PassToComponentProduk()}>Produk</a>
              </div>
          </div>
      </div>
  )
}

export default Navigation
