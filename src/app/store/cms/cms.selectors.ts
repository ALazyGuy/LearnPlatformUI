import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CmsState } from "./cms.state";

export const selectCms = createFeatureSelector<CmsState>('cms');

export const selectBlocks = createSelector(
  selectCms,
  (state: CmsState) => state.blocks
);

export const selectSelectedBlock = createSelector(
  selectCms,
  (state: CmsState) => state.selectedBlock
);

export const selectSelectedComponent = createSelector(
  selectCms,
  (state: CmsState) => state.selectedComponent
);