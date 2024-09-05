import Card from "../Card/Card";
import "./Board.css";
export default function Board() {
  const flags = [
    {
      src: "/img/br.svg",
      alt: "brazil",
    },
    {
      src: "/img/it.svg",
      alt: "italy",
    },
    {
      src: "/img/fr.svg",
      alt: "france",
    },
    {
      src: "/img/jp.svg",
      alt: "japan",
    },
    {
      src: "/img/au.svg",
      alt: "australia",
    },
    {
      src: "/img/kr.svg",
      alt: "korea",
    },
    {
      src: "/img/br.svg",
      alt: "brazil",
    },
    {
      src: "/img/it.svg",
      alt: "italy",
    },
    {
      src: "/img/fr.svg",
      alt: "france",
    },
    {
      src: "/img/jp.svg",
      alt: "japan",
    },
    {
      src: "/img/au.svg",
      alt: "australia",
    },
    {
      src: "/img/kr.svg",
      alt: "korea",
    },
  ]
  return (
    <div className="memory-game"> 
      {flags.map((flag) => (
        <Card frontFace={flag.src}/>
      ))}
    </div>
  )
}