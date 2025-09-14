import { createActionGroup, props } from "@ngrx/store";
import { BlockConfiguration, ComponentConfiguration } from "../../cms/models/component-configuration";

export const BlockActions = createActionGroup({
  source: "Block",
  events: {
    "Add block": props<{block: BlockConfiguration}>(),
    "Select block": props<{blockId: string}>()
  }
});

export const ComponentActions = createActionGroup({
  source: "Component",
  events: {
    "Add component": props<{component: ComponentConfiguration}>(),
    "Add component to block": props<{blockId: string, component: ComponentConfiguration}>(),
    "Select component": props<{component: ComponentConfiguration}>()
  }
});