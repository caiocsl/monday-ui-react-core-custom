import { queries } from "@storybook/testing-library";
import { BoundFunctions, Screen } from "@testing-library/react";
import { NavigationCommand as NavigationCommandType } from "./constants";
export declare type TestFunction = (canvas: BoundFunctions<typeof queries>, args: Record<string, any>) => unknown;
export declare type Coordinates = {
    x: number;
    y: number;
};
export declare const testFunctionWrapper: (testFunc: TestFunction) => ({ canvasElement, args }: {
    canvasElement: Screen;
    args: Record<string, any>;
}) => Promise<unknown>;
export declare const NavigationCommand: typeof NavigationCommandType;
export declare const interactionSuite: ({ beforeEach, beforeAll, skip, tests, afterEach, afterAll }: {
    beforeEach?: TestFunction;
    beforeAll?: TestFunction;
    skip?: boolean;
    tests: Array<TestFunction>;
    afterAll?: TestFunction;
    afterEach?: TestFunction;
}) => ({ canvasElement, args }: {
    canvasElement: Screen;
    args: Record<string, any>;
}) => Promise<void>;
export declare const getByTestId: (rootElement: HTMLElement | BoundFunctions<typeof queries>, dataTestId: string) => HTMLElement;
export declare const getAllByTestId: (rootElement: HTMLElement | BoundFunctions<typeof queries>, dataTestId: string) => HTMLElement[];
export declare const getByPlaceholderText: (rootElement: HTMLElement | BoundFunctions<typeof queries>, text: string) => HTMLElement;
export declare const getAllByPlaceholderText: (rootElement: HTMLElement | BoundFunctions<typeof queries>, text: string) => HTMLElement[];
export declare const getByClassName: (className: string) => HTMLCollectionOf<Element>;
export declare const getFirstByClassName: (className: string) => Element;
export declare const getByRole: (rootElement: HTMLElement | BoundFunctions<typeof queries>, role: string) => HTMLElement;
export declare const getAllByRole: (rootElement: HTMLElement | BoundFunctions<typeof queries>, role: string) => HTMLElement[];
export declare const getByLabelText: (rootElement: HTMLElement | BoundFunctions<typeof queries>, text: string) => HTMLElement;
export declare const getAllByLabelText: (rootElement: HTMLElement, text: string) => HTMLElement[];
export declare const getByText: (rootElement: HTMLElement | BoundFunctions<typeof queries>, text: string) => HTMLElement;
export declare const getAllByText: (rootElement: HTMLElement | BoundFunctions<typeof queries>, text: string) => HTMLElement[];
export declare const clickElement: (element: HTMLElement) => void;
export declare const hoverElement: (element: HTMLElement) => void;
export declare const typeText: (element: HTMLElement, text: string, waitForDebounceMs?: number) => Promise<void>;
export declare const expectActiveElementToHaveExactText: (text: string) => void;
export declare const expectActiveElementToHavePartialText: (text: string) => void;
export declare const pressNavigationKey: (command?: NavigationCommandType, waitForDebounceMs?: number) => Promise<void | import("@testing-library/user-event/dist/keyboard/types").keyboardState>;
export declare function delay(timeout: number): Promise<unknown>;
export declare const waitForElementVisible: (getterFunc: () => HTMLElement) => Promise<unknown>;
export declare const typeMultipleTimes: (text: string, count: number, options?: {
    delay: number;
}) => Promise<void>;
export declare function drag(element: HTMLElement, { delta, toCoords, toElm, steps, duration }: {
    delta: Coordinates;
    toCoords: Coordinates;
    toElm: HTMLElement;
    steps: number;
    duration: number;
}): Promise<void>;
