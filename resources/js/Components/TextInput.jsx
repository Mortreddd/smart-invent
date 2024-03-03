export default function TextInput({ className, ...props }) {
    return (
        <>
            <input
                {...props}
                className={`${className} border appearance-none rounded w-full text-gray-700 mb-3 ring-1 ring-secondary focus:ring-primary leading-tight duration-300 ease-in-out transition-colors focus:outline-none focus:shadow-outline`}
            />
        </>
    );
}
