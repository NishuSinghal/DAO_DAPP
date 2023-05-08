import "./investors.css"
function ReedemShare({state,account}){

    async function share(){
        let {contract}=state;
        let shares=document.querySelector("#shares").value;
        await contract.methods.reedemShare(shares).send({from:account,gas:480000})
    }
   
    return<><form onSubmit={share}>
         <label className="label1" htmlFor="shares">
         <span className="font">Number of Shares:</span>
        </label>
    <input type="text" id="shares"></input>

    <button className="button" type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;