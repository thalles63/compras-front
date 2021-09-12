export interface ListaCompras {
    _id?: string;
    descricao: string;
    checado: boolean;
    screenProps?: ListaComprasScreenProps;
}

export interface ListaComprasScreenProps {
    posicao?: any;
    deletado?: boolean;
    movingOffsetX?: number;
    movingOffsetY?: number;
}