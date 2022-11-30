type stateHandler = {
    updateState: React.Dispatch<React.SetStateAction<number>>
}

export interface textProps {
    message: string | undefined,
    type: string
};

export interface buttonProps {
    message?: string | undefined,
    img?: string,
    page: number,
    setPage: stateHandler["updateState"]
};

export interface listProps {
    elements: Pokedex | undefined | null,
    setPage: stateHandler["updateState"]
};

export interface cardProps {
    data: Pokedex,
    loading: boolean,
    page: number,
    setPage: stateHandler["updateState"]
}

export interface Pokedex {
    count: number;
    next: string;
    previous: null | string;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface PokeTypes {
    type: Type
}

export interface Type {
    name: string,
    url: string
}