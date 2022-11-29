import "./index.css";
import trollFace from "./TrollFace.svg";

export default function Header() {
    return (
        <div className="Header">
            <div className="Header--title">
                <img src={trollFace} className="Header--image"/>
                <h1 className="Header--topic">Meme Generator</h1>
            </div>
            <h2 className="header--course">React Course - Project 3</h2>

        </div>
    )
}
