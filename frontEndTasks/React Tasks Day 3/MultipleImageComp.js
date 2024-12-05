import React, { Component } from "react";
import Car from "../assets/images/car.png";
import OnePiece from "../assets/images/onepieceLogo.jpg";
import Zoro from "../assets/images/zoro.jpg";
import Nature from "../assets/images/nature.jpg";

class MultipleImageComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null 
        };
    }

    toggleImage = (image) => {
        this.setState({ selectedImage: image });
    };

    render() {
        return (
            <div style={styles.container}>
                <h2>Multiple Images with Name</h2>

                {/* Display selected image and name */}
                {this.state.selectedImage && (
                    <div style={styles.imageDisplay}>
                        <h3>{this.state.selectedImage.alt}</h3>
                        <img
                            src={this.state.selectedImage.src}
                            alt={this.state.selectedImage.alt}
                            style={styles.image}
                        />
                    </div>
                )}

                {/* Buttons to toggle images */}
                <div style={styles.buttons}>
                    <button
                        onClick={() => this.toggleImage({ src: Car, alt: "Car" })}
                        style={styles.button}
                    >
                        Show Car
                    </button>
                    <button
                        onClick={() =>
                            this.toggleImage({ src: OnePiece, alt: "One Piece" })
                        }
                        style={styles.button}
                    >
                        Show One Piece
                    </button>
                    <button
                        onClick={() => this.toggleImage({ src: Zoro, alt: "Zoro" })}
                        style={styles.button}
                    >
                        Show Zoro
                    </button>
                    <button
                        onClick={() =>
                            this.toggleImage({ src: Nature, alt: "Nature" })
                        }
                        style={styles.button}
                    >
                        Show Nature
                    </button>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
    },
    imageDisplay: {
        marginTop: "20px",
    },
    image: {
        height: "200px",
        width: "200px",
        borderRadius: "6px",
        boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.5)",
    },
    buttons: {
        marginTop: "20px",
    },
    button: {
        backgroundColor: "#000",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "10px 15px",
        fontSize: "14px",
        cursor: "pointer",
        margin: "5px",
        transition: "background-color 0.3s",
    },
};

export default MultipleImageComp;
