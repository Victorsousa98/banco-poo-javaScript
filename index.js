import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'João';
cliente1.cpf = '123.456.789-10';

const ccJoao = new ContaCorrente();
ccJoao.agencia = '123-4';
ccJoao.depositar(100);
ccJoao.sacar(50);


console.log(ccJoao);