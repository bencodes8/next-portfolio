'use client';
import * as React from "react";
import Image from "next/image";
import { Skeleton } from "./skeleton";

interface ImageParams {
    height?: number;
    width?: number;
    src: string;
    alt: string;
}

export default function FeaturedProjectImageLoader({ height, width, src, alt }: ImageParams) {
    const [isLoading, setIsLoading] = React.useState(true);

    const handleLoad = () => { 
        setIsLoading(false);
    }

    return (
        <>
            {isLoading && <Skeleton className="h-[320px] w-[480px]" />}
            <Image src={src}
                   alt={alt}
                   height={height || 320}
                   width={width || 480}
                   onLoad={handleLoad}
            />
        </>
    );
}