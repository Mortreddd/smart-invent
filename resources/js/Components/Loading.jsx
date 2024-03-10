export default function Loading() {
    return (
        <>
            <div
                className={`flex relative w-full h-[100vh] justify-center items-center bg-black/80`}
            >
                <div className="flex items-center justify-center h-screen space-x-2 bg-transparent dark:invert">
                    <span className="sr-only">Loading...</span>
                    <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-8 h-8 rounded-full bg-primary animate-bounce"></div>
                </div>
            </div>
        </>
    );
}
