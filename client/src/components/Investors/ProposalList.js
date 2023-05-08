import { useState, useEffect } from "react";

function ProposalList({ state }) {

   const [list, setlist] = useState()

   useEffect(() => {
      let { contract } = state;
      async function proposals() {
         const arrayProposal = await contract.methods.ProposalList().call();
         console.log(arrayProposal);
         setlist(arrayProposal)
      }
      contract && proposals();
   }, [state])



   return <>
      <div className="list">
         <h3>Proposal List</h3>
         <table>
            <tbody>  
         {list && list.map((e) => {
            return <tr>
               <td>{e.id}</td>
               <td>{e.description}</td>
               <td>{e.amount}</td>
               <td>{e.receipient}</td>
               <td>{e.votes}</td>
               <td>{e.end}</td>
               <td>{e.isExecuted}</td>
            </tr>
         })}
         </tbody>
         </table>
      </div>
   </>
}
export default ProposalList;