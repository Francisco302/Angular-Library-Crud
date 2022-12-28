export class Prestamo {

    public idPrestamo?: number;
    public numeroPrestamo?: number;
    public fechaPrestamo?: string;
    public descripcionPrestamo?: string;
    public detallesPrestamo? = [];
    constructor(
        idPrestamo?: number,
        numeroPrestamo?: number,
        fechaPrestamo?: string,
        descripcionPrestamo?: string,
        detallesPrestamo?: [],
    ) {
        this.idPrestamo = idPrestamo;
        this.numeroPrestamo = numeroPrestamo;
        this.fechaPrestamo = fechaPrestamo;
        this.descripcionPrestamo = descripcionPrestamo;
        this.detallesPrestamo = detallesPrestamo;
    }

}