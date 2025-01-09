interface CreateThoughtProps {
    author: string;
    saying: string;
}

interface ThoughtByIdProps {
    id: string;
}

interface UpdateThoughtProps {
    saying: string;
}

interface UpdateThoughtByIdProps {
    id: string;
    saying: string;
}