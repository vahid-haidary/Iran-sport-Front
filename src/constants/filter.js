import ProductsArray from "./ProductsArray"


    function runHandler() {
        ProductsArray.filterfunction((p)=>{
          const vahid = p.pCategory === "پیاده روی"
        })
      }
    
 


export {runHandler}