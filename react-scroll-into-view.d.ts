interface ScrollIntoViewProps {
    selector: string,
    children: JSX.Element[] | JSX.Element,
    smooth?: boolean,
    style?: object,
    alignToTop?: boolean,
    className?: string,
}

declare function ScrollIntoView(props: ScrollIntoViewProps): JSX.Element
