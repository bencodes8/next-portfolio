import Image from 'next/image';
import Link from 'next/link';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

export interface Certificate { 
    displayName: string;
    imageSrc: string;
    href: string;
    description: string;
    date_received: string;
};

export function CertificateIcon ({ displayName, imageSrc, href, description, date_received, ...props}: Certificate) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="flex flex-col justify-center items-center">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Image src={`/special/${imageSrc}.png`} alt={displayName} width={64} height={64} />
                    </Link>
                </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{displayName}</h4>
                    <p className="text-sm">{description}</p>
                    <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                        Received in {date_received}
                    </span>
                    </div>
                </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}