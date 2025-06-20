import { ethers } from "ethers";

console.log("Hola Mundo") // le pongo un comentario

const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");


async function getBlockNumber() {
    const block = await provider.getBlockNumber();
    console.log(block);
}

async function getBalance(address) {
    const balance = await provider.getBalance(address);
    console.log(ethers.formatEther(balance));
}

getBlockNumber();
getBalance("0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97");
