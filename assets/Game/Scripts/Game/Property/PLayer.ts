import GProperty from "../GProperty";
import PTile from "./Node/PTile";
import SGrid from "../Struct/SGrid";
import { EHierarchy } from "../GEnum";

/**
 * 层级
 */
export default class PLayer extends GProperty {
    protected hierarchy:EHierarchy = EHierarchy.Began;
    protected component:string = null;
    protected prefab:string = null;

    /**
     * 格子
     */
    public Grid:SGrid<PTile> = null;

    /**
     * 层级
     */
    public get Hierarchy(){
        return this.hierarchy;
    }

    /**
     * 绑定组件
     */
    public get Component(){
        return this.component;
    }

    /**
     * 预制体
     */
    public get Prefab(){
        return this.prefab;
    }
}