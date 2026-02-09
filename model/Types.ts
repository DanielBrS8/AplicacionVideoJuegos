export type Sistema = {
  id: string;
  nombre: string;
};


export type DatosFormularioVideojuego = {
  nombre: string;
  marca: string;
  descripcion: string;
  caratula: string;
  año: number;
  prestado: string;
  sistema: Sistema;
};


export type Videojuego = DatosFormularioVideojuego & {
  id: string;
};

export type Videojuegos = Array<Videojuego>;


export type Sistemas = Array<Sistema>;
