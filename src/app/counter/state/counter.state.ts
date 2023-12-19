const state = sessionStorage.getItem('localStorageKey')
let initialValue = 10;
if (state != "undefined") {
    console.log(state);
    let x =JSON.parse(state as any);
    //initialValue = parseInt(x.counter);
    initialValue = x;
}
export const initialState = {
    counter: initialValue
}