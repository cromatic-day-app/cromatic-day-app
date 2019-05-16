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

    allArtworks = (genre) => {
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

    userArtworks = (artworkId) => {
        return this.service
            .post(`/joinArtworks`, { artworkId })
            .then(response => response.data)
            // console.log(response.data)
            // console.log(response)
            .catch(err => console.log(err));
    };

    newVoucher(title, receiver, creator, message, userPhoto) {
        return this.service
            .post('/new', { title, receiver, creator, message, userPhoto })
            .catch(error => console.log(error))
    }

    deleteArtwork(artworkId) {
        return this.service
            .delete(`/delete/${artworkId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
}

export default ArtService;