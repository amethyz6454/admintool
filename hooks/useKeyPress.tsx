import React from "react";

const useKeyPress = (keys, callback, node = null) => {
    React.useLayoutEffect = React.useEffect;

    const callbackRef = React.useRef(callback);
    React.useLayoutEffect(() => {
        callbackRef.current = callback;
    });

    const handleKeyPress = React.useCallback(
        (event) => {
            if (keys.some((key) => event.key === key)) {
                callbackRef.current(event);
            }
        },
        [keys]
    );

    React.useEffect(() => {
        const targetNode = node ?? document;
        targetNode && targetNode.addEventListener("keydown", handleKeyPress);

        return () => targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress, node]);
};

export default useKeyPress;
