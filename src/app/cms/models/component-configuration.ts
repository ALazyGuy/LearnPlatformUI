export interface ComponentConfiguration {
    type: string;
    uniqueId: string;
    order: number;
}

export interface BlockConfiguration {
    type: string;
    uniqueId: string;
    order: number;
    components: ComponentConfiguration[];
}

export interface TextComponentConfiguration extends ComponentConfiguration {
    data: string;
}

export interface StaticBlockComponentConfiguration extends BlockConfiguration {
    // TODO Add configuration for layout
}   