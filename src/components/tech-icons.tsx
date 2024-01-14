import Image from 'next/image';
import { TechIcon } from '@/types/types';

export function TechIcons({ displayName, srcName, ...props }: TechIcon) {
    return (
        <div {...props} className="flex flex-col justify-center items-center">
            <Image src={`icons/tech/${srcName}.svg`} alt={displayName} width={48} height={48} />
            <p className="opacity-70 text-sm">{displayName}</p>
        </div>
    );
}