import { ILeaferCanvas, IRenderOptions, IBooleanMap, IBoundsData, ILeaferImage } from '@leafer/interface'

import { ILeafPaint, ILeafPaintPatternData } from '../type/IComputedType'
import { IUI, IUIData } from '../IUI'
import { ICachedShape } from '../ICachedShape'
import { IGradientPaint, IImagePaint, IImagePaintMode, IPaintAttr } from '../type/IType'

export interface IPaintModule {
    compute(attrName: IPaintAttr, ui: IUI): void

    fill(fill: string, ui: IUI, canvas: ILeaferCanvas,): void
    fills(fills: ILeafPaint[], ui: IUI, canvas: ILeaferCanvas): void

    fillText(ui: IUI, canvas: ILeaferCanvas): void

    stroke(stroke: string, ui: IUI, canvas: ILeaferCanvas): void
    strokes(strokes: ILeafPaint[], ui: IUI, canvas: ILeaferCanvas): void

    strokeText(stroke: string | ILeafPaint[], ui: IUI, canvas: ILeaferCanvas): void
    drawTextStroke(ui: IUI, canvas: ILeaferCanvas): void

    shape(ui: IUI, current: ILeaferCanvas, renderOptions: IRenderOptions): ICachedShape
}


export interface IPaintImageModule {
    image(ui: IUI, attrName: string, paint: IImagePaint, boxBounds: IBoundsData, firstUse: boolean): ILeafPaint
    checkImage(ui: IUI, canvas: ILeaferCanvas, paint: ILeafPaint, allowPaint?: boolean): boolean
    createPattern(ui: IUI, paint: ILeafPaint, pixelRatio: number): boolean
    recycleImage(attrName: IPaintAttr, data: IUIData): IBooleanMap

    createData(leafPaint: ILeafPaint, image: ILeaferImage, paint: IImagePaint, box: IBoundsData): void
    fillOrFitMode(data: ILeafPaintPatternData, mode: IImagePaintMode, box: IBoundsData, width: number, height: number, rotation: number): void
    clipMode(data: ILeafPaintPatternData, box: IBoundsData, x: number, y: number, scaleX: number, scaleY: number, rotation: number): void
    repeatMode(data: ILeafPaintPatternData, box: IBoundsData, width: number, height: number, x: number, y: number, scaleX: number, scaleY: number, rotation: number): void
}

export interface IPaintGradientModule {
    linearGradient(paint: IGradientPaint, box: IBoundsData): ILeafPaint
    radialGradient(paint: IGradientPaint, box: IBoundsData): ILeafPaint
    conicGradient(paint: IGradientPaint, box: IBoundsData): ILeafPaint
}