// Especificar la versio'n del compilador
pragma solidity ^0.5.0;

contract HelloWorld {
    function hello() public pure returns (string memory) {
        // memory para variables temporales
        // pure porque no modificamos el blockchain
        return "Hello world";
    }
}
