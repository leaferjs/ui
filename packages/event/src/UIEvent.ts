import { ILeaf, ILeafList, IPointData, IUIEvent } from '@leafer/interface'
import { Event, EventCreator } from '@leafer/core'

import { Keyboard } from './Keyboard'
import { PointerButton as B } from './PointerButton'


export class UIEvent extends Event implements IUIEvent {

    readonly x: number
    readonly y: number

    readonly path: ILeafList
    readonly throughPath?: ILeafList

    readonly altKey: boolean
    readonly ctrlKey: boolean
    readonly shiftKey: boolean
    readonly metaKey: boolean
    public get spaceKey(): boolean { return Keyboard.isHoldSpaceKey() }

    public get left(): boolean { return B.left(this) }
    public get right(): boolean { return B.right(this) }
    public get middle(): boolean { return B.middle(this) }
    readonly buttons: number

    declare readonly target: ILeaf
    declare readonly current: ILeaf
    readonly bubbles: boolean = true

    constructor(params: IUIEvent) {
        super(params.type)
        Object.assign(this, params)
    }

    public getBoxPoint(relative?: ILeaf): IPointData {
        if (!relative) relative = this.current
        return relative.getBoxPoint(this)
    }

    public getInnerPoint(relative?: ILeaf): IPointData {
        if (!relative) relative = this.current
        return relative.getInnerPoint(this)
    }

    public getLocalPoint(relative?: ILeaf): IPointData {
        if (!relative) relative = this.current
        return relative.getLocalPoint(this)
    }

    public getPagePoint(): IPointData {
        return this.current.getPagePoint(this)
    }

    // 兼容代码，未来可移除
    public getInner = this.getInnerPoint
    public getLocal = this.getLocalPoint
    public getPage = this.getPagePoint

    static changeName(oldName: string, newName: string): void {
        EventCreator.changeName(oldName, newName)
    }

}