//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract ContractMediator {
    function relayCalldata(address _address, bytes memory data) external {
        (bool s, ) = _address.call(data);
        require(s);
    }
}
