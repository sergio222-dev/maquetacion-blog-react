import React, {useState} from 'react';
import {NavbarItem} from "../NavbarItem";

export function useNavItems(items: string[]): [JSX.Element[], number] {

    const [currentIndex, setIndex] = useState(0);

    const results = [];

    for (let i = 0; i < items.length; i++) {
        results.push(
            <NavbarItem
                linkName={items[i]}
                index={i}
                setter={setIndex}
                currentIndex={currentIndex}
                key={i}
            />);
    }

    return [results, currentIndex];
}