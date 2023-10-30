import Image from 'next/image';

interface TechIcon {
    displayName: string;
    srcName: string;
};

export function TechIcon({ displayName, srcName }: TechIcon, {...props}) {
    return (
        <div {...props} className="flex flex-col justify-center items-center">
            <Image src={`icons/tech/${srcName}.svg`} alt={displayName} width={48} height={48} />
            {displayName}
        </div>
    );
}