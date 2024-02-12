
export interface ReleaseDateProps {
    day:number;
    month:string;
    year:number;
}

export interface AlbumProps {
    name:string;
    artist:string;
    // releaseDate: {
    //     day:number;
    //     month:string;
    //     year:number;
    // },
    releaseDate: ReleaseDateProps,
    genre:string;
    label:string;
    infoLink:string;
}
