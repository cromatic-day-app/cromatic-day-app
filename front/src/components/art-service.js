import axios from "axios";

class ArtService {
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/art`,
            withCredentials: true
        });
        this.service = service;
    }

    allGenres = () => {
        return this.service
            .get("/allGenres")
            .then(response => response.data)
            .catch(err => console.log(err));
    };

    allArtworks = genre => {
        return this.service
            .get(`/${genre}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    };

    oneArtwork = (genre, artworkId) => {
        return this.service
            .get(`/${genre}/${artworkId}`)
            .then(response => response.data)
            .catch(err => console.log(err));
    };
}

export default ArtService;