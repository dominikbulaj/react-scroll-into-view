import React from 'react';
export interface ScrollIntoViewProps {
    selector: string;
    children: React.ReactNode;
    smooth?: boolean;
    style?: object;
    alignToTop?: boolean;
    className?: string;
    scrollOptions?: ScrollIntoViewOptions;
    onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
}
declare const ScrollInto: ({ children, selector, smooth, style, alignToTop, className, onClick, scrollOptions }: ScrollIntoViewProps) => JSX.Element;
export default ScrollInto;
