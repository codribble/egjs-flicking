import Viewport from "./Viewport";
import { OriginalStyle, FlickingPanel, ElementLike, DestroyOption } from "../types";
declare class Panel implements FlickingPanel {
    viewport: Viewport;
    prevSibling: Panel | null;
    nextSibling: Panel | null;
    protected state: {
        index: number;
        position: number;
        relativeAnchorPosition: number;
        size: number;
        isClone: boolean;
        isVirtual: boolean;
        cloneIndex: number;
        originalStyle: OriginalStyle;
        cachedBbox: ClientRect | null;
    };
    private element;
    private original?;
    private clonedPanels;
    constructor(element: HTMLElement, index: number, viewport: Viewport);
    resize(): void;
    unCacheBbox(): void;
    getProgress(): number;
    getOutsetProgress(): number;
    getVisibleRatio(): number;
    focus(duration?: number): void;
    update(updateFunction: (element: HTMLElement) => any): void;
    prev(): FlickingPanel | null;
    next(): FlickingPanel | null;
    insertBefore(element: ElementLike | ElementLike[]): FlickingPanel[];
    insertAfter(element: ElementLike | ElementLike[]): FlickingPanel[];
    remove(): FlickingPanel;
    destroy(option: Partial<DestroyOption>): void;
    getElement(): HTMLElement;
    getAnchorPosition(): number;
    getRelativeAnchorPosition(): number;
    getIndex(): number;
    getPosition(): number;
    getSize(): number;
    getBbox(): ClientRect;
    isClone(): boolean;
    getCloneIndex(): number;
    getClonedPanels(): Panel[];
    getIdenticalPanels(): Panel[];
    getOriginalPanel(): Panel;
    setIndex(index: number): void;
    setPosition(pos: number): this;
    clone(cloneIndex: number, isVirtual?: boolean): Panel;
    cloneExternal(cloneIndex: number, element: HTMLElement): Panel;
    removeElement(): void;
    removeClonedPanelsAfter(start: number): void;
    private setElement(element);
}
export default Panel;
