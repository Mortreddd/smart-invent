export default function ProductImage({ image, name }) {
    return (
        <img
            src={`/images/${image}`}
            className="object-cover object-center py-2 mx-auto rounded aspect-square w-28 h-28"
            alt={name}
        />
    );
}
