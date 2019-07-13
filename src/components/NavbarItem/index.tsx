import React from 'react';

type props = {
    linkName: string,
    index: number,
    setter: (index: number) => void,
    currentIndex: number,
    zClass?: string
};

export function NavbarItem({linkName, index, setter, currentIndex, zClass}: props) {
    return(
      <div
          onMouseOver={() => setter(index)}
          className={zClass || "z-nav-link"}
          style={{fontWeight: currentIndex === index ? "bold" : "normal"}}
      >
          {linkName}
      </div>
    );
}