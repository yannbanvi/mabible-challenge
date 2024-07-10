export default function ArrowBackIcon({ fillColor = '#211B28' }) {
    return (
        <svg 
            width="10" 
            height="6" 
            viewBox="0 0 10 6" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L5 5L9 0.999999" stroke={fillColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}