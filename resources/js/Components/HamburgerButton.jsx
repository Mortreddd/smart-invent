export default function HamburgerButton({
    open,
    handleBurgerClick,
    className,
}) {
    return (
        <>
            <button
                onClick={handleBurgerClick}
                className={`${
                    open ? "change" : "inline-block cursor-pointer"
                } ${className}`}
            >
                <div className={`bar1`}></div>
                <div className={`bar2`}></div>
                <div className={`bar3`}></div>
            </button>
        </>
    );
}
