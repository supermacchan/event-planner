export const controlInput = (input, condition) => {
    if (condition) {
        input.blur();
    } else {
        input.focus();
    }
}