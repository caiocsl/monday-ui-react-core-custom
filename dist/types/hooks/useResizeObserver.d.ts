import { RefObject } from "react";
declare type ResizeCallback = ({ borderBoxSize }: {
    borderBoxSize: ResizeObserverSize;
}) => void;
export default function useResizeObserver({ ref, callback, debounceTime }: {
    ref: RefObject<HTMLElement>;
    callback: ResizeCallback;
    debounceTime?: number;
}): void;
export {};
