export interface textProps {
    message: string | undefined,
    type: string
};

export interface buttonProps {
    message?: string | undefined,
    img?: string,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
};

export interface listProps {
    elements: Pokedex | undefined | null
};

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
