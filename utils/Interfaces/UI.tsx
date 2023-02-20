import { TypeIconNames } from "@/components/ui/Icons";

export type TypeSizes = "xs" | "sm" | "lg" | undefined;

export type TypeVariantColors = "primary" | "secondary" | "danger" | "success" | "info" | "warning" | "default";

export type TypeGridLengths = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "flex" | "auto";

export type TypeColumnCount = 1 | 2 | 3 | 4 | 5 | 6;

export type TypeIconSizes = 16 | 24 | 32 | 48 | 64 | 96 | 120 | 128 | 144;

export type TypeGaps = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48;

export type TypeContentAlignments = "center" | "flex-end" | "flex-start" | "space-between";

export type TypeItemAlignments = "center" | "flex-end" | "flex-start";

export type TypePlacements =
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";

export type TypeThemes = "dark" | "light";

export type TypeOrientations = "vertical" | "horizontal";

export interface TypePlaceIcons {
    startIcon?: TypeIconNames;
    startIconClick?: () => void;
    endIcon?: TypeIconNames;
    endIconClick?: () => void;
}
