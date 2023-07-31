import {CSSProperties} from "react";
// @ts-ignore
import LayoutRichText from 'minigame-canvas-engine-richtext';
import ReactCanvas from "@liangshen/react-canvas";

export interface RichTextProps {
    className?: string;
    text?: string;
    onClick?: () => void;
    style?: CSSProperties;
}


ReactCanvas.use(LayoutRichText);
// @ts-ignore
const RichText = (props: RichTextProps) => <richtext {...props}></richtext>
export {RichText};
