export class Libro {

    public idLibro?: number;
    public ISBNLibro?: string;
    public idAutor?: number;
    public tituloLibro?: string;
    public valorPrestamoLibro?: string;
    constructor(
        idLibro?: number,
        ISBNLibro?: string,
        idAutor?: number,
        tituloLibro?: string,
        valorPrestamoLibro?: string,
    ) {
        this.idLibro = idLibro;
        this.ISBNLibro = ISBNLibro;
        this.idAutor = idAutor;
        this.tituloLibro = tituloLibro;
        this.valorPrestamoLibro = valorPrestamoLibro;
    }

}