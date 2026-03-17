export default function useDownloader() {
    return (file, filename) => {
        const href = URL.createObjectURL(file);
        const link = document.createElement('a');

        link.href = href;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }
}