"use client";
export const uppercaseFirstLetter = (text: string) => {
    let res = "";
    text.split(" ").forEach((word) => {
        let uppercaseFirstCharWord = "";
        word.split("").forEach((w, index) => {
            uppercaseFirstCharWord += index === 0 ? w.toUpperCase() : w;
        });
        res += uppercaseFirstCharWord;
    });
    return res;
};
