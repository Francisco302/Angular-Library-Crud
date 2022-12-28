export class DetallePrestamo {

    public idDetalleP?: number;
    public idPrestamo?: number;
    public idLibro?: number;
    public cantidadDetalleP?: number;
    public fechaEntregaDetalleP?: Date;
    constructor(
        idDetalleP?: number,
        idPrestamo?: number,
        idLibro?: number,
        cantidadDetalleP?: number,
        fechaEntregaDetalleP?: Date,

    ) {
        this.idDetalleP = idDetalleP;
        this.idPrestamo = idPrestamo;
        this.idLibro = idLibro;
        this.cantidadDetalleP = cantidadDetalleP;
        this.fechaEntregaDetalleP = fechaEntregaDetalleP;
    }

}