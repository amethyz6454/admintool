import { useEffect, useRef } from "react";

export default function useEventListener(eventType, callback) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const handler = (e) => callbackRef.current(e);
        window.addEventListener(eventType, handler);

        return () => window.removeEventListener(eventType, handler);
    }, [eventType]);
}
