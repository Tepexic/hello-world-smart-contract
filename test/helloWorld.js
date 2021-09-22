// Crear una instancia del contrato con artifacts
const HelloWorld = artifacts.require("HelloWorld");

contract("Testing HelloWorld", () => {
  it("Should return 'Hello world'", async () => {
    const helloWorld = await HelloWorld.deployed();
    const result = await helloWorld.hello();
    assert(result === "Hello world");
  });
});
