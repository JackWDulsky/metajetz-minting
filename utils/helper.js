const { createAlchemyWeb3 } = require('@alch/alchemy-web3')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('../scripts/whitelist.js')


export const updateMintNumbers = async () => {
    var collectionSize = 4000;
    var target = document.getElementById("collectionCount");
    target.innerHTML = collectionSize;

    // Replace this with function to get fill mint count.
    var totalMintCount = 0;
    target = document.getElementById("totalMintCount");
    target.innerHTML = totalMintCount;
}

export const whiteListSubmit = async () => {
    var x = document.getElementById("congrats");
    x.style.opacity = "100%";

    var x2 = document.getElementById("whiteListSubmit")
    x2.style.display = "none";
}

export const rsvpSubmit = async () => {
    var x = document.getElementById("rsvpSuccess");
    x.style.opacity = "100%";

    var x2 = document.getElementById("rsvpSubmit")
    x2.style.display = "none";
}

export const closeEmail = async (isSubmit) => {
    var x = document.getElementById("newsLetterSignUp");
    x.style.display = "none"
    if (isSubmit) {
        var x2 = document.getElementById("newsletterGoogleSubmit");
        x2.click();
    }
}