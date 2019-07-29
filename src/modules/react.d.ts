/**
 * react-slot definitions
 */
declare module 'react-slot' {
    import React from 'react';

    interface SlotProps {
        name?: string;
        as?: string;
        content: React.ReactNode;
        id?: string;
        className?: string;
        dataset?: object;
        role?: string;
    }

    const Slot: React.ComponentType<SlotProps>;
}

/**
 * Object assign
 */
declare module 'object-assign-deep' {
    function ObjectAssignDeep(...objects);
    export = ObjectAssignDeep;
}