import "./investors.css"
function Contribute({ state, account }) {

  async function contribute(e) {
    e.preventDefault();
    let { contract } = state;
    let amount = document.querySelector("#weiValue").value;
    await contract.methods.contribution().send({ from: account, gas: 490000 ,value:amount});
  }
  return <>
    <form onSubmit={contribute}>
      <label className="label1" htmlFor="weiValue">
        <span className="font">Contribution Amount: </span>
      </label>
      <input type="text" id="weiValue" ></input>
      <button type="submit" className="button">Contribute</button>
    </form>
    <br></br></>
}
export default Contribute;