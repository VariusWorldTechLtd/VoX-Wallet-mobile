import { Observable } from "tns-core-modules/data/observable";
require("nativescript-nodeify");
import Web3 from "web3";
import ethereumjs from "ethereumjs-tx";


export class Web3ViewModel extends Observable {
    private _web3: any;
    constructor(){
        super();
        this._web3 =  new Web3.providers.HttpProvider("https://rinkeby.infura.io/dHRT6sR6UQHeGrLuM7JO");
        this._web3.eth.getBlock('latest').then((block: any) => {
            console.log(`Last block: ${block.number}`);
            });
    }
}