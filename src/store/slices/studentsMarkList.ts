import { createSlice } from "@reduxjs/toolkit"
import markList from "../../mock/markList";

const initialState = markList;

const studentsMarkListSlice = createSlice({
    name: "studentsMarkList",
    initialState,
    reducers: {
        increment(state) {
            return state;
        }
    },
})

const { reducer } = studentsMarkListSlice;

export default reducer;