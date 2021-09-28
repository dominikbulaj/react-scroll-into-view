interface ScrollOptions {
    behavior?: 'auto' | 'smooth',
    block?: 'start' | 'center' | 'end' | 'nearest',
    inline?: 'start' | 'center' | 'end' | 'nearest',
}
export interface ScrollIntoViewProps {
    selector: string,
    children: JSX.Element[] | JSX.Element,
    smooth?: boolean,
    style?: object,
    alignToTop?: boolean,
    className?: string,
    scrollOptions?: ScrollOptions,
    onClick?: (ev: MouseEvent) => unknown,
}

declare const ScrollIntoView: React.FunctionComponent<ScrollIntoViewProps>

export default ScrollIntoView