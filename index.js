import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente('João', '123.456.789-10');
const cliente2 = new Cliente('Maria', '987.654.321-20');

const conta1 = new ContaCorrente(cliente1, '123');
const conta2 = new ContaCorrente(cliente2, '456');

console.log(conta1);