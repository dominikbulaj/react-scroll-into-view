import React from 'react';
type ClickHandler = (ev: React.MouseEvent<HTMLElement>) => void;
export type ScrollIntoViewProps = {
    selector: string;
    children: React.ReactNode;
    smooth?: boolean;
    style?: React.CSSProperties;
    alignToTop?: boolean;
    className?: string;
    scrollOptions?: ScrollIntoViewOptions;
    onClick?: ClickHandler;
};
declare const ScrollInto: ({ children, selector, smooth, style, alignToTop, className, onClick, scrollOptions }: ScrollIntoViewProps) => React.JSX.Element;
export default ScrollInto;
