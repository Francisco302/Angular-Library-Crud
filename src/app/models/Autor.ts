export class Autor {

    public idAutor?: number;
    public codigoAutor?: string;
    public nombreAutor?: string;
    public apellidoAutor?: string;

    constructor(
        idAutor?: number,
        codigoAutor?: string,
        nombreAutor?: string,
        apellidoAutor?: string,
    ) {
        this.idAutor =    idAutor;
        this.codigoAutor =codigoAutor;
        this.nombreAutor =nombreAutor;
        this.apellidoAutor =apellidoAutor;
    }

}