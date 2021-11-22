import { CSSProperties } from "@material-ui/core/styles/withStyles";

export const centeredContent: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export const centeredVerticalContent: CSSProperties = {
    ...centeredContent,
    flexDirection: "column",
};
