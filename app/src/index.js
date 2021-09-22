import Web3 from "web3";
import helloWorldArtifact from "../../build/contracts/HelloWorld.json";

window.onload = function () {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://127.0.0.1:8545")
  );

  const helloWorld = new web3.eth.Contract(
    helloWorldArtifact.abi,
    helloWorldArtifact.networks["5777"].address
  );

  console.log(helloWorld);

  const triggerButton = document.querySelector("#trigger-button");
  const displayText = document.querySelector("#display");
  triggerButton.addEventListener("click", async () => {
    const textResult = await helloWorld.methods.hello().call();
    console.log(textResult);
    displayText.innerHTML = textResult;
  });
};
