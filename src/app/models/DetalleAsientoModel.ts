export class DetalleAsientoModel {

    public iddetalleasiento?: number;
    public idcuenta?: number;
    public debedetalle?: string;
    public haberdetalle?: string;
    public idasiento?: number;

    constructor(
        iddetalleasiento: number,
        idcuenta: number,
        debedetalle: string,
        haberdetalle: string,
        idasiento: number

    ) {
        this.iddetalleasiento = iddetalleasiento;
        this.idcuenta = idcuenta;
        this.debedetalle = debedetalle;
        this.haberdetalle = haberdetalle;
        this.idasiento = idasiento;

    }

}