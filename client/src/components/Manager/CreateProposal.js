import "./manager.css"
function CreateProposal({state,account}){
    
    async function proposalCreation(e){
        let {contract}=state;
        e.preventDefault();
        try {
      
        let description=document.querySelector("#description").value;
        let amount=document.querySelector("#amount").value;
        let recipient=document.querySelector("#recipient").value;
        await contract.methods.createProposal(description,amount,recipient).send({from:account,gas:480000});
         
    } catch (error) {
            alert(error)
    }
    }
   
    return<>
    <form onSubmit={proposalCreation}>
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Neeed(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <button className="button" type="submit">Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;