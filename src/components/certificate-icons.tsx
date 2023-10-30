export interface Certificate { 
    displayName: string;
    imageSrc: string;
    href: string;
};

export function CertificateIcon ({ displayName, imageSrc, href, ...props}: Certificate) {
    return (
        <div {...props} className="flex flex-col justify-center items-center">

        </div>
    );
}