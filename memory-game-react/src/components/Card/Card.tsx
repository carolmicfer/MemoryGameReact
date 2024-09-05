import "./Card.css";

interface CardProps {
	frontFace: string;
}

export default function Card({ frontFace }: CardProps) {
	return (
		<div className="memory-card">
			<img className="front-face" src={frontFace} />
			<img className="back-face" src="src/assets/olympics.svg" />
		</div>
	);
}
