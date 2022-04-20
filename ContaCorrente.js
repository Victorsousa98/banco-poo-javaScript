export class ContaCorrente {
    static numeroDecontas = 0;

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDecontas++;
    }
    _cliente;
    agencia;


    _saldo = 0;

    set cliente(cliente) {
        // if (!(cliente instanceof Cliente)) {
        //     throw new Error('Cliente inválido');
        // }
            this._cliente = cliente;
        
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

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