import { BlockConfiguration, ComponentConfiguration } from "../../cms/models/component-configuration";

export interface CmsState {
    blocks: BlockConfiguration[];
    selectedBlock: BlockConfiguration | null;
    selectedComponent: ComponentConfiguration | null;
}

export const initialCmsState: CmsState = {
    blocks: [],
    selectedBlock: null,
    selectedComponent: null
};