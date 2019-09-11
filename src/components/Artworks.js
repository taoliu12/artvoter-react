import { Component } from 'react';
import artworks from "../artworks-data";

class Artworks extends Component {
    
    render() {
        console.log(artworks)
        return 'Artworks ' + this.props.children[0]
    }
}

export default Artworks