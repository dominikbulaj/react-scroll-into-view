interface ScrollOptions {
    behavior?: 'auto' | 'smooth',
    block?: 'start' | 'center' | 'end' | 'nearest',
    inline?: 'start' | 'center' | 'end' | 'nearest',
}
interface ScrollIntoViewProps {
    selector: string,
    children: JSX.Element[] | JSX.Element,
    smooth?: boolean,
    style?: object,
    alignToTop?: boolean,
    className?: string,
    scrollOptions?: ScrollOptions
}

const ScrollIntoView: React.FunctionComponent<ScrollIntoViewProps> = props => { }

export default ScrollIntoView