import { BlockConfiguration, ComponentConfiguration } from "../../cms/models/component-configuration";

export interface CmsState {
    blocks: BlockConfiguration[];
    selectedBlock: BlockConfiguration | null;
    selectedComponent: ComponentConfiguration | null;
    buildModeEnabled: boolean;
}

export const initialCmsState: CmsState = {
    blocks: [],
    selectedBlock: null,
    selectedComponent: null,
    buildModeEnabled: false
};