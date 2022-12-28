export class AsientoModel {

    public idasiento?: number;
    public fechaasiento?: string;
    public observacionasiento?: string;

    constructor(
        idasiento?: number,
        fechaasiento?: string,
        observacionasiento?: string

    ) {
        this.idasiento = idasiento;
        this.fechaasiento = fechaasiento;
        this.observacionasiento = observacionasiento;

    }

}