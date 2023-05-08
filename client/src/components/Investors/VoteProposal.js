import "./investors.css"
function VoteProposal({state,account}){
    
    async function VoteProposal(){
        try {
            
       
        let {contract}=state;
        let id=document.querySelector("#voteId").ariaValueMax;
        await contract.methods.voteProposal(id).send({from:account,gas:480000})
    } catch (error) {
            alert(error)
    }
    }
  
    return<><form onSubmit={VoteProposal}>
     <label className="label1" htmlFor="voteId">
     <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="voteId"></input>
    <button className ="button" type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;