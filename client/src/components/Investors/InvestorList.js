import {useState,useEffect} from "react"
function InvestorList({state}){

   const [list, setlist] = useState()

   useEffect(() => {
      let {contract}=state;
      async function investorsList(){
         let list=await contract.methods.InvestorList().call();
         console.log(list);
         setlist(list)
      }
      contract && investorsList();
   }, [state])
   
 
   return<>
    <div className="list">
    <h3>Investor's List</h3>
   {list && list.map((e)=>{
      return <p>{e}</p>
   })}
    </div>
   </>
  }
  export default InvestorList;