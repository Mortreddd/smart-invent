interface LoadingButtonProps {
    className?: string;
}
export default function LoadingButton({ className }: LoadingButtonProps) {
    return (
        <button className={`btn btn-disabled btn-block ${className}`}>
            <span className="loading loading-spinner"></span>
        </button>
    );
}
