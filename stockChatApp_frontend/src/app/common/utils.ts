export function  getShortCutKeyCombo(evt: KeyboardEvent) {
    const {ctrlKey, shiftKey, altKey, key} = evt;
    const shortCutKeys: String[] = [];
    if (ctrlKey) {
        shortCutKeys.push('CTRL')
    }

    if (shiftKey) {
        shortCutKeys.push('SHIFT')
    }

    if (altKey) {
        shortCutKeys.push('ALT')
    }

    shortCutKeys.push(key.toUpperCase())
    return  shortCutKeys.join("+");
}