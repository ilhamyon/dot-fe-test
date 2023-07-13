import {MouseEventHandler, ReactNode} from 'react';

export interface ButtonProps {
    text: string;
    className?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ContainerProps {
    children: ReactNode
}

export interface ImageCardProps {
    title: string,
    desc: string,
    imagePath: string
}

export interface MainTitleProps {
    title: string,
    className?: string
}

export interface DetailsProps {
    title: string,
    logo: string,
    brand: string,
    houseType: string,
    designType: string,
    dimension: string,
    wide: number,
    floor: number,
    bed: number,
    designPrice: string,
    constructionPrice: string
}

export interface BrandDetailsProps {
    logo: string,
    brand: string,
}

export interface HouseSpecsProps {
    dimension: string
    wide: number
    floor: number
    bed: number,
    containerClassName?: string,
    childClassName?: string
}

export interface PricingProps {
    designPrice: string,
    constructionPrice: string
}

export interface ReviewProps {
    username: string,
    star: number,
    review: string
}

export interface SuggestionsProps {
    title: string,
    logo: string,
    brand: string,
    image: string,
    houseType: string,
    designType: string,
    dimension: string,
    wide: number,
    floor: number,
    bed: number,
    designPrice: string,
    constructionPrice: string
}