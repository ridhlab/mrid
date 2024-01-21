import React from "react";

export const useMounted = () => {
    const [isMounted, setIsMounted] = React.useState(false); // Need this for the react-tooltip

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted;
};
