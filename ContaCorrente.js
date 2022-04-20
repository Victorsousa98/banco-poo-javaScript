export class ContaCorrente {
    ciente;
    agencia;


    _saldo = 0;

    sacar(valor) {
        if (valor > this._saldo) {
            throw new Error('Saldo insuficiente');
        }
        this._saldo -= valor;
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error('Valor inválido para depósito');
        }
        this._saldo += valor;
        return this._saldo;
    }

    tranferir(valor, conta) {
        if (valor <= 0) {
            throw new Error('Valor inválido para transferência');
        }
        this.sacar(valor);
        conta.depositar(valor);
    }
}