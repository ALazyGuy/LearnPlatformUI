import { createReducer, on } from "@ngrx/store";
import { initialCmsState } from "./cms.state";
import { BlockActions, CmsActions, ComponentActions } from "./cms.actions";
import { BlockConfiguration } from "../../cms/models/component-configuration";

export const cmsReducer = createReducer(
    initialCmsState,
    on(BlockActions.addBlock, (state, {block}) => {
        if (state.blocks.find(b => b.uniqueId === block.uniqueId)) {
            return state;
        }

        return {...state, blocks: [...state.blocks, block]};
    }),
    on(BlockActions.selectBlock, (state, {blockId}) => {
        const block: BlockConfiguration | undefined = state.blocks.find(b => b.uniqueId === blockId);
        if (!block) {
            return state;
        } 
        return {...state, selectedBlock: block, selectedComponent: null};
    }),
    on(ComponentActions.addComponentToBlock, (state, {blockId, component}) => {
        const blockIndex = state.blocks.findIndex(b => b.uniqueId === blockId);
        if (blockIndex === -1) {
            return state;
        }
        const block = state.blocks[blockIndex];
        if (block.components.find(c => c.uniqueId === component.uniqueId)) {
            return state;
        }
        const updatedBlock: BlockConfiguration = {
            ...block,
            components: [...block.components, component]
        };
        const updatedBlocks = [...state.blocks];
        updatedBlocks[blockIndex] = updatedBlock;
        const selectedBlock = state.selectedBlock?.uniqueId === blockId ? updatedBlock : state.selectedBlock;
        return {...state, blocks: updatedBlocks, selectedBlock: selectedBlock};
    }),
    on(ComponentActions.addComponent, (state, {component}) => {
        if (!state.selectedBlock) {
            return state;
        }
        const blockIndex = state.blocks.findIndex(b => b.uniqueId === state.selectedBlock?.uniqueId);
        if (blockIndex === -1) {
            return state;
        }
        const block = state.blocks[blockIndex];
        if (block.components.find(c => c.uniqueId === component.uniqueId)) {
            return state;
        }
        const updatedBlock: BlockConfiguration = {
            ...block,
            components: [...block.components, component]
        };
        const updatedBlocks = [...state.blocks];
        updatedBlocks[blockIndex] = updatedBlock;
        return {...state, blocks: updatedBlocks, selectedBlock: updatedBlock};
    }),
    on(ComponentActions.selectComponent, (state, {component}) => {
        return {...state, selectedComponent: component, selectedBlock: null};
    }),
    on(CmsActions.updateBuilderMode, (state, {mode}) => {
        return {...state, buildModeEnabled: mode};
    })
);