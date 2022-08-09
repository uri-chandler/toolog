declare module 'cli-banner' {
    interface options {
        paddingLength           ?:number,
        width                   ?:number,
        color                   ?:string,
        borderTopLeftCorner     ?:string,
        borderTopRightCorner    ?:string,
        borderBottomRightCorner ?:string,
        borderBottomLeftCorner  ?:string,
        borderVertical          ?:string,
        borderHorizontal        ?:string,
        borderColor             ?:string
    }

    export default function banner(text:string, options?:options) :void
}