import { BlockConfiguration, ComponentConfiguration } from "../cms/models/component-configuration";
import { CmsState, initialCmsState } from "./cms/cms.state";

export interface AppState {
    cmsState: CmsState;
}

export const initialState: AppState = {
    cmsState: initialCmsState
};