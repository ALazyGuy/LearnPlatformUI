export interface ComponentConfiguration {
    type: string;
    uniqueId: string;
}

export interface TextComponentConfiguration extends ComponentConfiguration {
    data: string;
}

export interface StaticBlockComponentConfiguration extends ComponentConfiguration {
    components: ComponentConfiguration[];
    // TODO Add configuration for layout
}   