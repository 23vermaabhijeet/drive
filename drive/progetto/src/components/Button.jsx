function Button({ text, ahref, color, wid }) {
    // Aggiungiamo la larghezza come classe dinamica
    const widthClass = wid ? `w-${wid}` : '';  // Verifica se wid è passato, altrimenti lascia vuoto

    if (color === "red") {
        return (
            <a href={ahref}>
                <button
                    type="button"
                    className={`${widthClass} focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900`}
                >
                    {text}
                </button>
            </a>
        );
    } else if (color === "green") {
        return (
            <a href={ahref}>
                <button
                    type="button"
                    className={`${widthClass} focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
                >
                    {text}
                </button>
            </a>
        );
    }

    return (
        <a href={ahref}>
            <button
                type="button"
                className={`${widthClass} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 focus:outline-none ml-auto`}
            >
                {text}
            </button>
        </a>
    );
}

export default Button;
