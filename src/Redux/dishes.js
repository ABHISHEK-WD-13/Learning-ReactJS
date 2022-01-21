import { DISHES } from '../shared/Dish';


export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
            return state;
    }
}